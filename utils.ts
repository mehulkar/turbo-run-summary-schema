export interface environmentVariables {
  configured: string[];
  inferred: string[];
  global: string[];
}

export interface expandedInputs {
  [key: string]: string[];
}
