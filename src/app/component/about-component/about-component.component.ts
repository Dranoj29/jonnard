import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {

  activeRoute = 'about';
  product='I';
  isTop = true;

  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => {
      this.onScroll();
    };
  }

  onScroll(): void {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 1024) {
      this.isTop = false;
    } else {
      this.isTop = true;
    }
  }

  scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  scrollTo($el:any){
    $el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
