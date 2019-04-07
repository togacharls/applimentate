import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToPositiveNumber]'
})
export class ToPositiveNumberDirective {

  private lastValue: any;

  @HostListener( 'keyup', [ '$event' ] )
  numberPositive( ev: any ) {
    if (!this.isValidKey(ev.key)) {
      ev.currentTarget.value = this.lastValue;
      ev.preventDefault();
      return false;
    } else {
      this.lastValue = ev.currentTarget.value;
    }
  }

  @HostListener( 'paste', [ '$event' ] )
  blockPaste( ev: any  ) {
    ev.preventDefault();
  }

  private isValidKey( key: string ): boolean {
    return key.includes('Arrow') || key === 'Backspace' || key === 'Delete' || !isNaN(parseInt(key, 10));
  }
}
