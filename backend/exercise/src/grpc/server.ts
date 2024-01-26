import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import path from "path";

import { getHistoryWorkoutData } from "../model/exercise";
import { ProtoGrpcType } from "../proto/logs";
import { logsServiceHandlers } from "../proto/logsPackage/logsService";

const GRPC_PORT = 8082;
const PROTO_PATH = path.resolve(__dirname, "../proto/logs.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const grpcObject = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const Logs = grpcObject.logsPackage;

export const main = () => {
  const server = getServer();
  server.bindAsync(
    `0.0.0.0:${GRPC_PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        return console.error(err);
      }
      console.log(`gRPC listening on ${port}`);
      server.start();
    }
  );
};

function getServer() {
  const server = new grpc.Server();

  server.addService(Logs.logsService.service, {
    getWorkoutData: async (req, res) => {
      const { uid = "", start = "", end = "" } = req.request;
      const [startDate, endDate] = [new Date(start), new Date(end)];
      const result = await getHistoryWorkoutData(
        Number(uid),
        startDate,
        endDate
      );
      console.log("Exercise Server", result);
      res(null, result);
    },
    getReport: () => {
      throw new Error("getReport not implemented");
    },
    getUid: () => {
      throw new Error("getUid not implemented");
    },
  } as logsServiceHandlers);
  return server;
}
