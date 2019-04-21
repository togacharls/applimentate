import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToPositiveNumber]'
})
export class ToPositiveNumberDirective {

  @HostListener( 'keydown' || 'paste', [ '$event' ] )
  private numberPositive( ev: any ): void {
    if (!this.isValidKey(ev.key) || !this.isValidKey(ev.clipboardData.getData('text'))) {
      ev.preventDefault();
    }
  }

  private isValidKey( key: string ): boolean {
    return key.includes('Arrow') || key === 'Backspace' || key === 'Delete' || !isNaN(parseInt(key, 10));
  }
}
