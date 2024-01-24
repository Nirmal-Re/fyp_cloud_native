import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { logsServiceClient as _logsPackage_logsServiceClient, logsServiceDefinition as _logsPackage_logsServiceDefinition } from './logsPackage/logsService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  logsPackage: {
    Report: MessageTypeDefinition
    ReportRequest: MessageTypeDefinition
    ReportResponse: MessageTypeDefinition
    logsService: SubtypeConstructor<typeof grpc.Client, _logsPackage_logsServiceClient> & { service: _logsPackage_logsServiceDefinition }
    uidRequest: MessageTypeDefinition
    uidResponse: MessageTypeDefinition
  }
}

