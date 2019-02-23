import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiPage } from './bmi.page';
import { By } from '@angular/platform-browser';
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';



describe( 'BmiPage html elements', () => {
  let component: BmiPage;
  let fixture: ComponentFixture<BmiPage>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [ BmiPage ],
      imports: [
        IonicModule,
        TranslateModule.forRoot(),
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: NavController, useValue: null }
      ]
    } );
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( BmiPage );
    component = fixture.componentInstance;

    fixture.detectChanges();
  } );

  it( 'should create a title and is translatable ', () => {
    const element: HTMLIonTitleElement = fixture.debugElement.query( By.css( 'ion-title' ) ).nativeElement;
    expect( element ).toBeTruthy();
    expect( element.innerText ).toContain( 'BMI.SUBTITLE' );
    expect( element.translate ).toBeTruthy();
  } );

  it( 'should create a back button and is not hidden', () => {
    const element: HTMLIonBackButtonElement = fixture.debugElement.query( By.css( 'ion-back-button' ) ).nativeElement;
    expect( element ).toBeTruthy();
    expect( element.hidden ).toBeFalsy();
  } );

  it( 'All the labels should exist', () => {
    const element = fixture.debugElement.queryAll( By.css( 'ion-label' ) );
    console.log( element );

    expect( element[ 0 ].nativeElement.innerHTML ).toContain( 'BMI.HEIGHT (cm)' );
    expect( element[ 1 ].nativeElement.innerHTML ).toContain( 'BMI.WEIGHT (kg)' );
    expect( element[ 2 ].nativeElement.innerHTML ).toContain( 'BMI.WOMAN' );
    expect( element[ 3 ].nativeElement.innerHTML ).toContain( 'BMI.MAN' );
    expect( element[ 4 ].nativeElement.innerHTML ).toContain( 'BMI.RESULT: 0' );
    expect( element[ 5 ].nativeElement.innerHTML ).toContain( 'BMI.CALC' );
    expect( element ).toBeTruthy();
  } );




} );
