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

const grpcClient = new grpcObject.logs.logsService(
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
  onClientReady();
});

function onClientReady() {
  grpcClient.getReport({ id: "1" }, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res);
  });
}

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// app.use("/report", router());

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3000/");
});
