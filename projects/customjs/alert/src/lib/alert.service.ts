import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AlertConfig, ALERT_CLASS_PREFIX } from './alert.models';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  alert(config: AlertConfig) {
    return this.snackBar.open(config.message, config.action, {
      panelClass: `${ALERT_CLASS_PREFIX}${config.color}`,
      duration:
        config.duration === 0
          ? 0
          : config.duration > 0
          ? config.duration * 1000
          : 3e3,
    });
  }
}
