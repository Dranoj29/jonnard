import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MatDialogService } from 'src/app/sevices/mat-dialog.service';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  email = new FormControl();
  hide = true;
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private dialog: MatDialogService
    ) { }

  ngOnInit(): void {
  }

  onclickLogin(){
    this.dialog.openErrorDialog('Login failed, Please try again.');
  }

  onclickGuest(){
    this.dialog.openDialog('Reminder', 
    'Login as guest will proceed to administration role to manipulate all the data of this website. '+
    'Other features such as add, update and delete of data will be visible in this role, '+
    'but all data changes will not reflect as final data and will not be saved into database. '+
    'On the other hand login as guest is just a showcase of the administration role and features.');
  }

}
