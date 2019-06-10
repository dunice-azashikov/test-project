import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyle({
      fontSize: "2rem",
      fontFamily: "'Indie Flower', cursive",
      textAlign: "center",
    });
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle({
      fontSize: "1rem",
      fontFamily: "",
      textAlign: "",
    });
  }
  
  private setStyle({
    fontSize,
    fontFamily,
    textAlign,
  }: {
    fontSize: string,
    fontFamily: string,
    textAlign: string,
  }) {
    this.el.nativeElement.style.fontSize = fontSize;
    this.el.nativeElement.style.textAlign = textAlign;
    this.el.nativeElement.style.fontFamily = fontFamily;
  }
}
