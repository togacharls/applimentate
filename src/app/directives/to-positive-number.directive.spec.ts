import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { ToPositiveNumberDirective } from './to-positive-number.directive';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  template: `<ion-input appToPositiveNumber min="1" type="number"></ion-input>`
})
 class TestComponentWithToPositiveNumberDirective {}

describe('ToPositiveNumberDirective', () => {
  let component: TestComponentWithToPositiveNumberDirective;
  let fixture: ComponentFixture<TestComponentWithToPositiveNumberDirective>;
  let inputEl: DebugElement;
  const directive = new ToPositiveNumberDirective();
  let ionInput;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [ ToPositiveNumberDirective, TestComponentWithToPositiveNumberDirective ],
      imports: [ IonicModule ]
    } );
});

beforeEach(function() {
  fixture = TestBed.createComponent(TestComponentWithToPositiveNumberDirective);
  component = fixture.componentInstance;
  inputEl = fixture.debugElement.query(By.css('ion-input'));
  ionInput = inputEl.nativeElement;
  
});


  it('Input value accept just numbers', () => {
    fixture.whenStable().then(()=>{
      inputEl.triggerEventHandler('keydown', {key: '7', target: ionInput})
      expect(ionInput.value).toBe('7');
      inputEl.triggerEventHandler('keydown', {key: ',', target: ionInput})
      expect(ionInput.value).toBe('7');
      inputEl.triggerEventHandler('keydown', {key: 'e', target: ionInput.target})
      expect(ionInput.value).toBe('7');
      inputEl.triggerEventHandler('keydown', {key: '+', target: ionInput.target})
      expect(ionInput.value).toBe('7');
    });
  })

  // it('Input value accept just numbers', () => {
  //   fixture.whenStable().then(()=>{
  //     console.log(ionInput.value);
  //     inputEl.triggerEventHandler('paste', {key: '4', target: ionInput})
  //     expect(ionInput.value).toBe('4');
  //   });
  // })



});
