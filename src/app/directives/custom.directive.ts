import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  private backgroundColor = 'red';
  private fontSize = '2rem';
  private fontFamily = 'sans-serif';

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyle({
      backgroundColor: "red",
      fontSize: "2rem",
      fontFamily: "sans-serif",
    });
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle({
      backgroundColor: "",
      fontSize: "1rem",
      fontFamily: "",
    });
  }
  
  private setStyle({
    backgroundColor,
    fontSize,
    fontFamily,
  }: {
    backgroundColor: string,
    fontSize: string,
    fontFamily: string,
  }) {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.fontSize = fontSize;
    this.el.nativeElement.style.fontFamily = fontFamily;
  }
}
