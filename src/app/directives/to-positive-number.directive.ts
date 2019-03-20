import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToPositiveNumber]'
})
export class ToPositiveNumberDirective {

  @HostListener( 'keyup', [ '$event' ] )
  numberPositive( ev: any ) {
    // if the value is NOT a number from 0 to 9 in keyboard or numberpad or backspace key then the value is ''
    if ( !((ev.keyCode >= 96 && ev.keyCode <= 105) || (ev.keyCode >= 48 && ev.keyCode <= 57) || ev.keyCode === 8 ) ) {
      ev.path[ 0 ].value = '';
      return false;
    }
  }

  @HostListener( 'paste', [ '$event' ] )
  blockPaste( ev: any  ) {
    ev.preventDefault();
  }
}
