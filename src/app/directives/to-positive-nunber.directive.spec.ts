import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import { ToPositiveNumberDirective } from './to-positive-number.directive';

@Component({
  template: `<input appToPositiveNumber min="1" type="number">`
})
class TestComponentWithToPositiveNumberDirective{}

describe( 'ToPositiveNumberDirective', () => {
// let keyboardValue: any;
  let component: TestComponentWithToPositiveNumberDirective;
  let fixture: ComponentFixture<TestComponentWithToPositiveNumberDirective>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule,
        FormsModule ],
      declarations: [ TestComponentWithToPositiveNumberDirective, ToPositiveNumberDirective ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentWithToPositiveNumberDirective);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });


  it( 'should create an instance', () => {
    fixture.detectChanges();
    inputEl.triggerEventHandler('keydown', {keyCode: 104});
  });
});
