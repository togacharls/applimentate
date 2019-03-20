import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ToPositiveNumberDirective } from './to-positive-number.directive';
import { ToPositiveNumberDirectiveTest } from './to-positive-number.directive-test';

describe( 'ToPositiveNumberDirective', () => {
// let keyboardValue: any;
let component: ToPositiveNumberDirectiveTest;
let fixture: ComponentFixture<ToPositiveNumberDirectiveTest>;
let inputEl: DebugElement;


beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      IonicModule,
      FormsModule ],
    declarations: [ ToPositiveNumberDirectiveTest, ToPositiveNumberDirective ]
  });
});

beforeEach(() => {
  fixture = TestBed.createComponent(ToPositiveNumberDirectiveTest);
  component = fixture.componentInstance;
  inputEl = fixture.debugElement.query(By.css('input'));
});


it( 'should create an instance', () => {
  fixture.detectChanges();
  inputEl.triggerEventHandler('keydown', {keyCode: 104});
    
  console.log(inputEl);
  } );

} );
