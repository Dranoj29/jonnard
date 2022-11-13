import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, Input} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mywork-component',
  templateUrl: './mywork-component.component.html',
  styleUrls: ['./mywork-component.component.css']
})
export class MyworkComponentComponent implements OnInit, AfterViewInit {

  @Input() admin = false;

  activeRoute = 'myWork';

  @ViewChildren(NgbCarousel) carouselList!:QueryList<NgbCarousel>;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.carouselList.forEach(caruosel=>{
      caruosel.pause();
    });
  }

  onHover(i: number){
    this.carouselList.get(i)?.cycle();
  }

  onHoverOut(i: number){
    this.carouselList.get(i)?.pause();
  }

}
