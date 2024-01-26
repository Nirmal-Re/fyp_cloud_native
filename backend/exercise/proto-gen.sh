#!/bin/sh

npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=./src/proto/ ./src/proto/logs.proto 