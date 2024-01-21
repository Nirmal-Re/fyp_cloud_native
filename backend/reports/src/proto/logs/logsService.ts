// Original file: src/proto/logs.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ReportRequest as _logs_ReportRequest, ReportRequest__Output as _logs_ReportRequest__Output } from '../logs/ReportRequest';
import type { ReportResponse as _logs_ReportResponse, ReportResponse__Output as _logs_ReportResponse__Output } from '../logs/ReportResponse';

export interface logsServiceClient extends grpc.Client {
  getReport(argument: _logs_ReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_logs_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logs_ReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_logs_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logs_ReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_logs_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logs_ReportRequest, callback: grpc.requestCallback<_logs_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logs_ReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_logs_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logs_ReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_logs_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logs_ReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_logs_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logs_ReportRequest, callback: grpc.requestCallback<_logs_ReportResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface logsServiceHandlers extends grpc.UntypedServiceImplementation {
  getReport: grpc.handleUnaryCall<_logs_ReportRequest__Output, _logs_ReportResponse>;
  
}

export interface logsServiceDefinition extends grpc.ServiceDefinition {
  getReport: MethodDefinition<_logs_ReportRequest, _logs_ReportResponse, _logs_ReportRequest__Output, _logs_ReportResponse__Output>
}
