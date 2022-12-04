import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation} from '@angular/core';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Swiper } from "swiper";
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponentComponent implements OnInit, AfterViewInit {

  activeRoute = 'home';

  @ViewChild(SwiperComponent, { static: false }) swiper!: SwiperComponent;
  //@ViewChild('carousel', { static: false }) car!: NgbCarousel;

  //@ViewChildren('carousel')  carouselList!: QueryList<NgbCarousel>;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
   
  }

  slideNext(){
    this.swiper.swiperRef.slideNext(300);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(300);
  }
}
