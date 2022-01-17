/* elementRef es un servicio por lo que se debe hacer una inyeccion de dependencias */
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  /* nombre que se usa */
  selector: '[appHighlight]'
})
export class HighlightDirective {
  /* escuchar eventos del elemento host*/

  /* si el mouse pasa sobre la directiva se pone amarillo */
  /* nativeElement entramos a elementos nativos de javascript */
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
  /* si el mouse pasa sale la directiva se pone azul */
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }
  /* inyeccio de dependecias */
  constructor(private element: ElementRef) {
  }

}
