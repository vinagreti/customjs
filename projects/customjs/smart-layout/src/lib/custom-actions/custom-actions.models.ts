export enum CUSTOM_ACTIONS_TYPE {
  BATCH = 'BATCH',
  ROW = 'ROW',
}

export interface CustomActionsConfig {
  type?: CUSTOM_ACTIONS_TYPE;
  [key: string]: any;
}
