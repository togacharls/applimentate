import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToPositiveNumber]'
})
export class ToPositiveNumberDirective {
  private arrValues: string[] = [];

  @HostListener('keyup', ['$event'])
  numberPositive(ev: any): void {
    if (
      // If the key is Backspace or Delete or a number then update this.arrValues
      !isNaN(ev.key) ||
      ev.key === 'Backspace' ||
      ev.key === 'Delete'
    ) {
      this.arrValues = ev.currentTarget.value.split('');
      ev.currentTarget.value = this.arrValues.join('');
    } else if (
      // Invalid keys don't modify the ev.currentTarget.value
      ev.key === '-' ||
      ev.key === '+' ||
      ev.key === '.' ||
      ev.key === ',' ||
      ev.key === 'e'
      ) {
        ev.currentTarget.value = parseInt(this.arrValues.join(''), 10);
      }
  }

  @HostListener('paste', ['$event'])
  blockPaste(ev: any): void {
    ev.preventDefault();
  }
}
