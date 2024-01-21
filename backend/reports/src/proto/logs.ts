import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { logsServiceClient as _logs_logsServiceClient, logsServiceDefinition as _logs_logsServiceDefinition } from './logs/logsService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  logs: {
    ReportRequest: MessageTypeDefinition
    ReportResponse: MessageTypeDefinition
    logsService: SubtypeConstructor<typeof grpc.Client, _logs_logsServiceClient> & { service: _logs_logsServiceDefinition }
  }
}

