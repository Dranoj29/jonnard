import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {



  isDrawerOpen = true;
  mode = new FormControl('side');
  mobileView = false;

  active = 'Dashboard';
  

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onChangeView(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.onChangeView(event.target.innerWidth);
  }

  onChangeView(screenWidth:number){
    if(screenWidth < 800){
      this.mode.setValue('over');
      this.isDrawerOpen = false;
      this.mobileView = true;
    }else{
      this.mode.setValue('side');
      this.isDrawerOpen = true;
      this.mobileView = false;
    }
  }

  onClickMenu(menu: string){
    this.active = menu;
    if(this.mobileView){
      this.isDrawerOpen = !this.isDrawerOpen;
    }
  }
}
