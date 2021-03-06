import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertConfig, ALERT_CLASS_PREFIX } from './alert.models';

const DEFAULT_DURATION_IN_SECONDS = 3;

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  alert(config: AlertConfig) {
    const action = config.action || '×';
    const panelClass = [ALERT_CLASS_PREFIX, `${ALERT_CLASS_PREFIX}-${config.color}`];
    const duration =
      config.duration === 0
        ? 0
        : (config.duration > 0 ? config.duration : DEFAULT_DURATION_IN_SECONDS) * 1000;

    return this.snackBar.open(config.message, action, {
      panelClass,
      duration,
      horizontalPosition: config.horizontalPosition || 'center',
      verticalPosition: config.verticalPosition || 'top',
    });
  }
}
