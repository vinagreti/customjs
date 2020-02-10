import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { AskComponent } from './ask.component';
import { AskConfig, AskType } from './ask.model';

export const DIALOG_CLASS_PREFIX = 'custom-ask';

@Injectable({
  providedIn: 'root',
})
export class AskService {
  constructor(private dialog: MatDialog) {}

  ask(config: AskConfig): Observable<boolean> {
    const panelClass: string = this.getDialogClassBasedOnType(config.type);

    const dialogRef = this.dialog.open(AskComponent, {
      panelClass,
    });

    dialogRef.componentInstance.title = config.title || dialogRef.componentInstance.title;

    dialogRef.componentInstance.question = config.question || dialogRef.componentInstance.question;

    dialogRef.componentInstance.confirm = config.confirm || dialogRef.componentInstance.confirm;

    dialogRef.componentInstance.reject = config.reject || dialogRef.componentInstance.reject;

    dialogRef.componentInstance.cancel = config.cancel || dialogRef.componentInstance.cancel;

    dialogRef.componentInstance.showReject = !!config.showReject;

    dialogRef.componentInstance.hideCancel = !!config.hideCancel;

    return dialogRef.afterClosed();
  }

  private getDialogClassBasedOnType(type: AskType) {
    return type ? `${DIALOG_CLASS_PREFIX}-${type}` : DIALOG_CLASS_PREFIX;
  }
}
