import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from 'src/app/model/IDialogData';
import { MatDialogService } from 'src/app/sevices/mat-dialog.service'; 

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  dialogData = {} as IDialogData;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
    private dialog: MatDialogService
  ) { }

  ngOnInit(): void {
    this.dialogData = this.data;
    console.log(this.dialogData.message);
  }

  onClickProceed(){
    this.dialog.openSuccessDialog('Successfully login as guest');
  }

}
