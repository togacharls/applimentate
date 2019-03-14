import { Directive, HostListener } from '@angular/core';
@Directive( {
  selector: '[appToPositiveNumber]'
} )
export class ToPositiveNumberDirective {
  private values: number;
  private valuesLength: number;

  @HostListener( 'paste', [ '$event' ] )
  blockPaste( e: KeyboardEvent ) {
    e.preventDefault();
  }
  @HostListener( 'keyup', [ '$event' ] )
  numberPositive( ev: any ) {
    console.log( ev );
    this.valuesLength = ev.path[ 0 ].value.length;

    if ( !isNaN( ev.path[ 0 ].valueAsNumber ) ) {
      // If the value is a number this.values = input.value without digits like: */-+
      this.values = Number( ev.path[ 0 ].value.replace( /\D/, '' ) );
      ev.path[ 0 ].value = this.values;
    } else {
      // if the value is '' because the input.value is invalid then input.value = this.values
      ev.path[ 0 ].value = this.values;
    }
    if ( ev.which === 8 && this.valuesLength === 0 ) {
      // if press backspace until the input.value.length is 0 the input value is ''
      // for prevent the input.value = this.values
      ev.path[ 0 ].value = '';
    }
  }

}

