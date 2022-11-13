import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogService } from 'src/app/sevices/mat-dialog.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  @Input() activeRoute = ''

  constructor(
      private router: Router,
      private dialogService: MatDialogService
    ) { }


  ngOnInit(): void {
  }

  navigateTo(routerLink: string){
    this.router.navigateByUrl(routerLink);
  }

  onClickAdminButton(){
    this.dialogService.openLoginDialog();
  }

}
