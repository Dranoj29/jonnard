import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  isDrawerOpen: boolean = false;
  active = "mywork";
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu(menu: string){
    this.active = menu;
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
