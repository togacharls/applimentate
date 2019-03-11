import { Directive, ElementRef } from '@angular/core';

@Directive( {
  selector: '[appToPositiveNumber]',
  host: { '(input)': 'numberPositive()' }
} )
export class ToPositiveNumberDirective {
  constructor ( private el: ElementRef ) { }

  numberPositive() {
    console.log();
    if ( isNaN( Math.abs( parseInt( this.el.nativeElement.value, 10 ) ) ) ) {
      this.el.nativeElement.value = '';
    } else {
      this.el.nativeElement.value = Math.abs( parseInt( this.el.nativeElement.value, 10 ) );
    }
  }

}
