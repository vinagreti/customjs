export type ConfirmationType = 'error' | 'success' | 'info';

export interface ConfirmConfig {
  title: string;
  description?: string;
  confirm?: string;
  reject?: string;
  cancel?: string;
  showReject?: boolean;
  showCancel?: boolean;
  type?: ConfirmationType;
}
