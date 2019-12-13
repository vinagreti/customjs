import { ThemePalette } from '@angular/material';

type Seconds = number;

export const ALERT_CLASS_PREFIX = 'customjs-alert-';

export interface AlertConfig {
  color: ThemePalette;
  message: string;
  action?: string;
  duration?: Seconds;
}
