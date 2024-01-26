// Original file: src/proto/logs.proto

import type { workoutType as _logsPackage_workoutType, workoutType__Output as _logsPackage_workoutType__Output } from '../logsPackage/workoutType';

export interface WorkoutDataResponse {
  'push'?: (_logsPackage_workoutType | null);
  'pull'?: (_logsPackage_workoutType | null);
  'legs'?: (_logsPackage_workoutType | null);
  'cardio'?: (_logsPackage_workoutType | null);
}

export interface WorkoutDataResponse__Output {
  'push'?: (_logsPackage_workoutType__Output);
  'pull'?: (_logsPackage_workoutType__Output);
  'legs'?: (_logsPackage_workoutType__Output);
  'cardio'?: (_logsPackage_workoutType__Output);
}
