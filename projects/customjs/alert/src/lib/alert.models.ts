type Seconds = number;

export const ALERT_CLASS_PREFIX = 'customjs-alert-';

export type AlertColor = `primary` | `accent` | `warn`;

export interface AlertConfig {
  color: AlertColor;
  message: string;
  action?: string;
  duration?: Seconds;
}
