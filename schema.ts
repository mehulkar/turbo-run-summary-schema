import { taskSummary, taskDefinition } from "./tasks";
import { expandedInputs } from "./utils";

// Top level thing
export interface RunSummary {
  id: string;
  turboVersion: string;
  globalHashSummary: globalHashSummary;
  packages: string[];
  executionSummary: executionSummary;
  tasks: taskSummary[];
}

interface turboPipeline {
  [key: string]: taskDefinition;
}

interface globalHashSummary {
  globalFileHashMap: expandedInputs;
  rootExternalDepsHash: string;
  globalCacheKey: string;
  pipeline: turboPipeline;
}

interface executionSummary {
  success: number;
  failed: number;
  cached: number;
  attempted: number;
}
