import { Directive, HostListener } from '@angular/core';

@Directive( {
  selector: '[appToPositiveNumber]'
} )
export class ToPositiveNumberDirective {
  @HostListener( 'input', [ '$event' ] ) numberPositive( ev ) {
    ev.target.value = Math.abs( ev.path[ 0 ].valueAsNumber );
  }
}
