import { Directive, HostListener } from '@angular/core';
const Color = require('colrs');

@Directive({
  selector: '[appToPositiveNumber]'
})
export class ToPositiveNumberDirective {
  private lastValue: any;

  @HostListener('keyup', ['$event'])
  numberPositive(ev: any) {
    console.log( ev);
    if (!this.isValidKey(ev.key)) {
      ev.currentTarget.value = this.lastValue;
      ev.preventDefault();
      return false;
    } else {
      this.lastValue = ev.currentTarget.value;
    }
  }

  @HostListener('paste', ['$event'])
  blockPaste(ev: any) {
    ev.preventDefault();
  }

  private isValidKey(key: string): boolean {
    console.log(Color('bgyellow', key ));

    return (
      key.includes('Arrow') || key === 'Backspace' || !isNaN(parseInt(key))
    );
  }
}
