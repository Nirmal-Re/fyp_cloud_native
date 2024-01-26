import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import path from "path";

import { ProtoGrpcType } from "../proto/logs";
import { ConnectionCheckOutFailedEvent } from "mongodb";
import { connect } from "http2";

const GRPC_PORT = 8082;
const PROTO_PATH = path.resolve(__dirname, "../proto/logs.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const grpcObject = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const LOG_SERVER_ID = process.env.LOG_SERVER_ID || "0.0.0.0";
const grpcLogClient = new grpcObject.logsPackage.logsService(
  `${LOG_SERVER_ID}:${GRPC_PORT}`,
  grpc.credentials.createInsecure()
);

const EXERCISE_SERVER_ID = process.env.EXERCISE_SERVER_ID || "0.0.0.0";
const grpcExerciseClient = new grpcObject.logsPackage.logsService(
  `${EXERCISE_SERVER_ID}:${GRPC_PORT}`,
  grpc.credentials.createInsecure()
);

// const deadline = new Date();
// deadline.setSeconds(deadline.getSeconds() + 5);
// grpcLogClient.waitForReady(deadline, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("gRPC client connected");
// });

async function connectLogClient() {
  while (true) {
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 5);

    try {
      await new Promise((resolve, reject) => {
        grpcLogClient.waitForReady(deadline, (err) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log("gRPC Log client connected");
            resolve(null);
          }
        });
      });
      break;
    } catch (err) {
      console.log("Failed to connect Logs, retrying in 5 seconds...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

async function connectExerciseClient() {
  while (true) {
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 5);

    try {
      await new Promise((resolve, reject) => {
        grpcExerciseClient.waitForReady(deadline, (err) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log("gRPC Exercise client connected");
            resolve(null);
          }
        });
      });
      break;
    } catch (err) {
      console.log("Failed to connect Exercise, retrying in 5 seconds...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

connectLogClient();
connectExerciseClient();

export { grpcLogClient, grpcExerciseClient };
