import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import path from "path";

import { ProtoGrpcType } from "./proto/logs";
import router from "./router";
import { logsServiceHandlers } from "./proto/logs/logsService";

const GRPC_PORT = 8082;
const PROTO_PATH = path.resolve(__dirname, "./proto/logs.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const grpcObject = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const Logs = grpcObject.logs;

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

function main() {
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
}

function getServer() {
  const server = new grpc.Server();

  server.addService(Logs.logsService.service, {
    getReport: (req, res) => {
      console.log("getReport", req.request);
      res(null, { reportData: "reportData" });
    },
  } as logsServiceHandlers);
  return server;
}

app.use("/logs", router());

main();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
