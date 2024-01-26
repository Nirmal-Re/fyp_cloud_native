// Original file: src/proto/logs.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ReportRequest as _logsPackage_ReportRequest, ReportRequest__Output as _logsPackage_ReportRequest__Output } from '../logsPackage/ReportRequest';
import type { ReportResponse as _logsPackage_ReportResponse, ReportResponse__Output as _logsPackage_ReportResponse__Output } from '../logsPackage/ReportResponse';
import type { WorkoutDataRequest as _logsPackage_WorkoutDataRequest, WorkoutDataRequest__Output as _logsPackage_WorkoutDataRequest__Output } from '../logsPackage/WorkoutDataRequest';
import type { WorkoutDataResponse as _logsPackage_WorkoutDataResponse, WorkoutDataResponse__Output as _logsPackage_WorkoutDataResponse__Output } from '../logsPackage/WorkoutDataResponse';
import type { uidRequest as _logsPackage_uidRequest, uidRequest__Output as _logsPackage_uidRequest__Output } from '../logsPackage/uidRequest';
import type { uidResponse as _logsPackage_uidResponse, uidResponse__Output as _logsPackage_uidResponse__Output } from '../logsPackage/uidResponse';

export interface logsServiceClient extends grpc.Client {
  getReport(argument: _logsPackage_ReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  getReport(argument: _logsPackage_ReportRequest, callback: grpc.requestCallback<_logsPackage_ReportResponse__Output>): grpc.ClientUnaryCall;
  
  getUid(argument: _logsPackage_uidRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_uidResponse__Output>): grpc.ClientUnaryCall;
  getUid(argument: _logsPackage_uidRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_logsPackage_uidResponse__Output>): grpc.ClientUnaryCall;
  getUid(argument: _logsPackage_uidRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_uidResponse__Output>): grpc.ClientUnaryCall;
  getUid(argument: _logsPackage_uidRequest, callback: grpc.requestCallback<_logsPackage_uidResponse__Output>): grpc.ClientUnaryCall;
  getUid(argument: _logsPackage_uidRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_uidResponse__Output>): grpc.ClientUnaryCall;
  getUid(argument: _logsPackage_uidRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_logsPackage_uidResponse__Output>): grpc.ClientUnaryCall;
  getUid(argument: _logsPackage_uidRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_uidResponse__Output>): grpc.ClientUnaryCall;
  getUid(argument: _logsPackage_uidRequest, callback: grpc.requestCallback<_logsPackage_uidResponse__Output>): grpc.ClientUnaryCall;
  
  getWorkoutData(argument: _logsPackage_WorkoutDataRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_WorkoutDataResponse__Output>): grpc.ClientUnaryCall;
  getWorkoutData(argument: _logsPackage_WorkoutDataRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_logsPackage_WorkoutDataResponse__Output>): grpc.ClientUnaryCall;
  getWorkoutData(argument: _logsPackage_WorkoutDataRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_WorkoutDataResponse__Output>): grpc.ClientUnaryCall;
  getWorkoutData(argument: _logsPackage_WorkoutDataRequest, callback: grpc.requestCallback<_logsPackage_WorkoutDataResponse__Output>): grpc.ClientUnaryCall;
  getWorkoutData(argument: _logsPackage_WorkoutDataRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_WorkoutDataResponse__Output>): grpc.ClientUnaryCall;
  getWorkoutData(argument: _logsPackage_WorkoutDataRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_logsPackage_WorkoutDataResponse__Output>): grpc.ClientUnaryCall;
  getWorkoutData(argument: _logsPackage_WorkoutDataRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_logsPackage_WorkoutDataResponse__Output>): grpc.ClientUnaryCall;
  getWorkoutData(argument: _logsPackage_WorkoutDataRequest, callback: grpc.requestCallback<_logsPackage_WorkoutDataResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface logsServiceHandlers extends grpc.UntypedServiceImplementation {
  getReport: grpc.handleUnaryCall<_logsPackage_ReportRequest__Output, _logsPackage_ReportResponse>;
  
  getUid: grpc.handleUnaryCall<_logsPackage_uidRequest__Output, _logsPackage_uidResponse>;
  
  getWorkoutData: grpc.handleUnaryCall<_logsPackage_WorkoutDataRequest__Output, _logsPackage_WorkoutDataResponse>;
  
}

export interface logsServiceDefinition extends grpc.ServiceDefinition {
  getReport: MethodDefinition<_logsPackage_ReportRequest, _logsPackage_ReportResponse, _logsPackage_ReportRequest__Output, _logsPackage_ReportResponse__Output>
  getUid: MethodDefinition<_logsPackage_uidRequest, _logsPackage_uidResponse, _logsPackage_uidRequest__Output, _logsPackage_uidResponse__Output>
  getWorkoutData: MethodDefinition<_logsPackage_WorkoutDataRequest, _logsPackage_WorkoutDataResponse, _logsPackage_WorkoutDataRequest__Output, _logsPackage_WorkoutDataResponse__Output>
}
