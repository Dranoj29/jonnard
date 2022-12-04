import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Util } from 'src/app/util/util';
export interface UserData {
  id: number;
  type: string;
  projectName: string;
  requestorName: string;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['type', 'projectName', 'requestorName', 'date', 'status', 'option'];
  data!: MatTableDataSource<UserData>;
  noData!: MatTableDataSource<UserData>;

  dummy = false;
  @Input() mobileView!: boolean;
  search = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('search', {static:false}) searchElement!: ElementRef<HTMLInputElement>;

  constructor() { 
    const users = Util.generateDummyData().sort(function(a, b){
     return b.date > a.date ? 1 : b.date < a.date ? -1 : 0;
    });

    // Assign the data to the data source for the table to render
    this.data = new MatTableDataSource(users);
    this.noData = new MatTableDataSource();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.noData.paginator = this.paginator;
    this.data.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  cancelSearch():void{
    this.search = !this.search;
    this.data.filter = '';
    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  toggleDummy(){
    this.dummy = !this.dummy;
    if(this.dummy)
      this.data.paginator = this.paginator;
    else
      this.noData.paginator = this.paginator;

  }

  projectIconSelector(type:string):string{
    if(type==='Mobile App'){
      return 'fa-mobile';
    }
    if(type==='Website'){
      return 'fa-globe';
    }
    if(type==='Web Service'){
      return 'fa-gears';
    }
    return 'fa-code';
  }

  onDelete(id: number){
    console.log('id: '+id);
  }
}
