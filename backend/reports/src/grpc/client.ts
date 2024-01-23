import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import path from "path";

import { ProtoGrpcType } from "../proto/logs";

const GRPC_PORT = 8082;
const PROTO_PATH = path.resolve(__dirname, "../proto/logs.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const grpcObject = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const grpcClient = new grpcObject.logsPackage.logsService(
  `0.0.0.0:${GRPC_PORT}`,
  grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
grpcClient.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("gRPC client connected");
});

export default grpcClient;
