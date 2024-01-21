import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

import { getHabitStats } from "./model/logs";
import { ProtoGrpcType } from "./proto/logs";
import { logsServiceHandlers } from "./proto/logsPackage/logsService";

const GRPC_PORT = 8082;
const PROTO_PATH = path.resolve(__dirname, "./proto/logs.proto");

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
    getReport: async (req, res) => {
      const { uid = "", start = 0, end = 0 } = req.request;
      const result = (await getHabitStats(uid, start, end)) as any; //Need to do some type fixing here
      res(null, result);
    },
  } as logsServiceHandlers);
  return server;
}
