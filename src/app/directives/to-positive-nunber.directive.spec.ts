import { ToPositiveNumberDirective } from './to-positive-number.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BmiPage } from '../bmi/bmi.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

describe( 'ToPositiveNumberDirective', () => {

  let component: BmiPage;
  let fixture: ComponentFixture<BmiPage>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [ BmiPage ],
      imports: [
        IonicModule,
        FormsModule,
      ]
    } );
  } );



  it( 'should create an instance', () => {
    const directive = new ToPositiveNumberDirective();
    expect( directive.numberPositive( null ) ).toBeTruthy();
  } );
  // it( 'should create an instance', () => {
  //   const directive = new ToPositiveNumberDirective();
  //   expect( directive.numberPositive() ).toBeTruthy();
  // } );
  // it( 'should create an instance', () => {
  //   const directive = new ToPositiveNumberDirective();
  //   expect( directive.numberPositive() ).toBeTruthy();
  // } );
} );
