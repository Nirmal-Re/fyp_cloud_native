// Original file: src/proto/logs.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ReportRequest as _logsPackage_ReportRequest, ReportRequest__Output as _logsPackage_ReportRequest__Output } from '../logsPackage/ReportRequest';
import type { ReportResponse as _logsPackage_ReportResponse, ReportResponse__Output as _logsPackage_ReportResponse__Output } from '../logsPackage/ReportResponse';

export interface logsServiceClient extends grpc.Client {
  getReport(argument: _logsPackage_ReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface logsServiceHandlers extends grpc.UntypedServiceImplementation {
  getReport: grpc.handleUnaryCall<_logsPackage_ReportRequest__Output, _logsPackage_ReportResponse>;
  
}

export interface logsServiceDefinition extends grpc.ServiceDefinition {
  getReport: MethodDefinition<_logsPackage_ReportRequest, _logsPackage_ReportResponse, _logsPackage_ReportRequest__Output, _logsPackage_ReportResponse__Output>
}
