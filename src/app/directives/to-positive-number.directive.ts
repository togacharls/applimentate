import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToPositiveNumber]'
})
export class ToPositiveNumberDirective {

  @HostListener( 'keydown', [ '$event' ] )
  numberPositive( ev: any ): void {
    if (this.isValidKey(ev.key)) {
      ev.target.value = ev.key;
    }
  }

  @HostListener( 'paste', [ '$event' ] )
  async blockPaste( ev: any  ) {
    const clipboardValue: any = await navigator['clipboard'].readText();
    const mockIt0 = {
      target: ev.target,
      key: clipboardValue
    };
    console.log(clipboardValue);
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
