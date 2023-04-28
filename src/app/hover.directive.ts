import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  color: string = '#000';
  constructor(private element:ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
    this.element.nativeElement.style.color = '#fff';
    console.log(this.element.nativeElement)
  }
}
