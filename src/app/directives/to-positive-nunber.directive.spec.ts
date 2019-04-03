import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { dispatchEvent } from '@angular/platform-browser/testing/src/browser_util';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { ToPositiveNumberDirective } from './to-positive-number.directive';
const Color = require('colrs');

@Component({
  template: `<input appToPositiveNumber min="1" type="number">`
})
class TestComponentWithToPositiveNumberDirective {}

describe('ToPositiveNumberDirective', () => {

  let component: TestComponentWithToPositiveNumberDirective;
  let fixture: ComponentFixture<TestComponentWithToPositiveNumberDirective>;
  let inputEl;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [ ToPositiveNumberDirective, TestComponentWithToPositiveNumberDirective ],
      imports: [
        IonicModule,
        FormsModule,
      ]
    } );
  } );

beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentWithToPositiveNumberDirective);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it( 'should create an instance', () => {
    let ionput = inputEl.nativeElement;
    const mock9 = {
      currentTarget: ionput || {value: '9'},
      key: '9'
    };
    fixture.detectChanges();
    inputEl.triggerEventHandler('keyup', mock9);
    
    console.log(inputEl);
    console.log(Color('bgcyan', inputEl.nativeElement.value));

  } );
});
