import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";


SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponentComponent implements OnInit {

  activeRoute = 'home';

  @ViewChild('swiper', { static: false }) swiper: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  slideNext(){
    this.swiper.swiperRef.slideNext(300);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(300);
  }
}
