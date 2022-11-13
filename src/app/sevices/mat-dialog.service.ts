import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../component/dialog/login-dialog/login-dialog.component';
import { IDialogData } from '../model/IDialogData'
import { DialogComponent } from '../component/dialog/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MatDialogService {

   dialogData = {} as IDialogData;

  constructor(private dialog: MatDialog) { }

  openLoginDialog(){
    this.dialog.open(LoginDialogComponent, {
      panelClass: 'app-full-bleed-dialog'
    });
  }

  openDialog(title: string, message: string){
    this.dialogData.title = title
    this.dialogData.message = message;
    this.dialogData.cancelButton = true;
    this.dialogData.okayButton = false;
    this.dialogData.proceedButton = true;
    this.dialogData.closeButton = false;
    this.dialogData.role = 'default';
    this.dialog.open(DialogComponent, {
      maxWidth: '600px',
      autoFocus: false,
      data: this.dialogData
    });
  }

  openSuccessDialog(message: string){
    this.dialogData.title = "Success"
    this.dialogData.message = message;
    this.dialogData.cancelButton = false;
    this.dialogData.okayButton = true;
    this.dialogData.proceedButton = false;
    this.dialogData.closeButton = false;
    this.dialogData.role = 'success';
    this.dialog.open(DialogComponent, {
      minWidth: '300px',
      autoFocus: false,
      data: this.dialogData
    });
  }

  openErrorDialog(message: string){
    this.dialogData.title = "Error"
    this.dialogData.message = message;
    this.dialogData.cancelButton = false;
    this.dialogData.okayButton = true;
    this.dialogData.proceedButton = false;
    this.dialogData.closeButton = false;
    this.dialogData.role = 'error';
    this.dialog.open(DialogComponent, {
      minWidth: '300px',
      autoFocus: false,
      data: this.dialogData
    });
  }

  openFailedDialog(message: string){
    this.dialogData.title = "Failed"
    this.dialogData.message = message;
    this.dialogData.okayButton = true;
    this.dialogData.role = 'failed';
    this.dialog.open(DialogComponent, {
      autoFocus: false,
      data: this.dialogData
    });
  }
}
