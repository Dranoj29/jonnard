import { Directive, ElementRef, AfterViewInit, OnInit, } from '@angular/core';

@Directive({
  selector: '[onLoadFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private elRef:ElementRef) { }

  ngOnInit(){

  }
  ngAfterViewInit(): void {
    this.elRef.nativeElement.focus();
  }
}
