import { element } from 'protractor';
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[grifarParagrafo]'
})
export class GrifarParagrafoDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(this.el);
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
  }
  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
  }
}
