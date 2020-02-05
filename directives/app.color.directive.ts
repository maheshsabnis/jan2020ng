import {Directive, ElementRef, Renderer, Input, HostListener} from '@angular/core';

// the attribute directive. All attaribute directives are applied using
// property binding

// attribute directives modify rendering of DOM element
// ElementRef and Renderer classes to be ctor injected for Managing DOM element and rendering
// These clasees are resolved by BrowserModule

// the Input Decorated Properties for mapping with Attribute Directive
// these properties will accept data from the component where this directive is applied

@Directive({
  selector: '[setColor]'
})
export class ColorDirective {
  constructor(private ele: ElementRef, private renderer: Renderer){}

  @Input('setColor') setColor: string;

  // the logic method
  private applyColor(color: string): void {
      this.renderer.setElementStyle(this.ele.nativeElement, 'backgroundColor', color);
  }
  // events based on which the attribute will be activated or applied
  // use HostListener decorator that will host events for directive

  @HostListener('mouseenter')
  onmouseenter():void{
    this.applyColor(this.setColor || 'magenta');
  }

  @HostListener('mouseleave')
  onmouseleave():void {
    this.applyColor(null);
  }


}