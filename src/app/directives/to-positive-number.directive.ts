import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToPositiveNumber]'
})
export class ToPositiveNumberDirective {
  private lastValue: any;

  @HostListener( 'keyup', [ '$event' ] )
  numberPositive( ev: any ) {
    if (!this.isValidKey(ev.key)) {
      ev.target.value = this.lastValue;
    } else {
      this.lastValue = ev.target.value;
    }
  }

  @HostListener( 'paste', [ '$event' ] )
  async blockPaste( ev: any  ) {
    const clipboardValue: any = await navigator['clipboard'].readText();
    const mockIt0 = {
      target: ev.target,
      key: clipboardValue
    };
    if (!isNaN(clipboardValue)) {
      this.numberPositive(mockIt0);
    } else {
      ev.preventDefault();
    }
  }

  private isValidKey( key: string ): boolean {
    return key.includes('Arrow') || key === 'Backspace' || key === 'Delete' || !isNaN(parseInt(key, 10));
  }
}
