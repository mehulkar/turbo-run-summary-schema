import { environmentVariables, expandedInputs } from "./utils";

interface resolvedTaskDefinition {
  outputs: string[];
  inputs: string[];
  cache: boolean;
  dependsOn: string[];
  outputMode: string;
  env: string[];
  persistent: boolean;
}

// Same as resolvedTaskDefinition, but all keys are optional. Can we combine somehow?
export interface taskDefinition {
  outputs?: string[];
  inputs?: string[];
  cache?: boolean;
  dependsOn?: string[];
  outputMode?: string;
  env?: string[];
  persistent?: boolean;
}

interface taskExecutionSummary {
  start: Date;
  duration: number;
  status: string;
  error: string | null;
}

export interface taskSummary {
  taskId: string;
  task: string;
  package: string;
  hash: string;
  cacheState: {};
  command: string;
  outputs: string[];
  excludedOutputs: string[];
  logFile: string;
  dependencies: string[];
  dependents: string[];
  resolvedTaskDefinition: resolvedTaskDefinition;
  expandedInputs: expandedInputs;
  expandedOutputs: string[];
  framework: string;
  environmentVariables: environmentVariables;
  execution: taskExecutionSummary;
}
