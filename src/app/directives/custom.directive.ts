import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnChanges {

  constructor(private elementRef: ElementRef) { }

  @Input() isActive!: boolean;

  ngOnChanges() {
    if (this.isActive) {
      this.elementRef.nativeElement.style.backgroundColor = '#fe796c'
    } else {
      this.elementRef.nativeElement.style.backgroundColor = '#adee6c'
    }
  }

}
