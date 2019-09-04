import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmServiceComponent } from './confirm-service.component';
import { ConfirmConfig } from './confirm-service.model';

const DIALOG_CLASS_PREFIX = 'app-dialog-';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(
    private dialog: MatDialog
  ) { }

  confirm(config: ConfirmConfig) {

    const confirmationType = config.type || 'error';

    const dialogRef = this.dialog.open(ConfirmServiceComponent, {

      panelClass: `${DIALOG_CLASS_PREFIX}${confirmationType}`,

    });

    dialogRef.componentInstance.title = config.title;

    dialogRef.componentInstance.description = config.description;

    dialogRef.componentInstance.confirm = config.confirm;

    dialogRef.componentInstance.reject = config.reject;

    dialogRef.componentInstance.cancel = config.cancel;

    dialogRef.componentInstance.showReject = config.showReject;

    dialogRef.componentInstance.showCancel = !!config.showCancel;

    return dialogRef.afterClosed();

  }
}
