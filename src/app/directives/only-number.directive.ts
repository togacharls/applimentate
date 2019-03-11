import { Directive } from '@angular/core';

@Directive( {
  selector: '[appOnlyNumber]',
  host: { "(keyup)": "numberPositive($event)" }
} )
export class OnlyNumberDirective {

  numberPositive( event: any ) {
    const keys = parseInt( event.target.value, 10 )
    if ( !isNaN( keys ) ) {
      console.log( Math.abs( keys ) );
      return Math.abs( keys );
    }
  }
}
