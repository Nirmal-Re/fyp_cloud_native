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

const LOG_SERVER_ID = process.env.LOG_SERVER_ID || "0.0.0.0";
const grpcClient = new grpcObject.logsPackage.logsService(
  `${LOG_SERVER_ID}:${GRPC_PORT}`,
  grpc.credentials.createInsecure()
);

// const deadline = new Date();
// deadline.setSeconds(deadline.getSeconds() + 5);
// grpcClient.waitForReady(deadline, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("gRPC client connected");
// });

async function connectClient() {
  while (true) {
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 5);

    try {
      await new Promise((resolve, reject) => {
        grpcClient.waitForReady(deadline, (err) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log("gRPC client connected");
            resolve(null);
          }
        });
      });
      break;
    } catch (err) {
      console.log("Failed to connect, retrying in 5 seconds...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

connectClient();

export default grpcClient;
