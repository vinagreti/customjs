import { MatDialogConfig } from '@angular/material';

export type AskType = 'error' | 'success' | 'info';

export interface AskConfig {
  title: string;
  question?: string;
  confirm?: string;
  reject?: string;
  cancel?: string;
  showReject?: boolean;
  hideCancel?: boolean;
  type?: AskType;
  dialogConfig?: MatDialogConfig;
}
