import { ToPositiveNumberDirective } from './to-positive-number.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BmiPage } from '../bmi/bmi.page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe( 'ToPositiveNunberDirective', () => {
  let component: BmiPage;
  let fixture: ComponentFixture<BmiPage>;
  let input: DebugElement;
  const directive = new ToPositiveNumberDirective( null );

  beforeEach( function () {
    TestBed.configureTestingModule( {
      declarations: [ BmiPage, ToPositiveNumberDirective ],

    } )
  } );


  beforeEach( function () {
    fixture = TestBed.createComponent( BmiPage )
    component = fixture.componentInstance;
    input = fixture.debugElement.query( By.css( 'ion-input' ) );

    fixture.detectChanges();

  } );

  it( 'should create an instance', () => {


    expect( directive ).toBeTruthy();
  } );
} );
