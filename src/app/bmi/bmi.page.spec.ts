import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiPage } from './bmi.page';
import { By } from '@angular/platform-browser';
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Genre } from './enums/bmi.genre.enum';
import { DebugElement } from '@angular/core';
import { BmiRange } from './enums/bmi.bmi-range.enum';

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


  it( 'Should create a title and is translatable ', () => {
    const element: any = fixture.debugElement.query( By.css( 'ion-title' ) ).nativeElement;

    expect( element ).toBeTruthy();
    expect( element.translate ).toBeTruthy();
    expect( element.innerHTML ).toContain( 'BMI.SUBTITLE' );
  } );

  it( 'Should have a back button', () => {
    const element: HTMLIonBackButtonElement = fixture.debugElement.query( By.css( 'ion-back-button' ) ).nativeElement;

    expect( element ).toBeTruthy();
  } );

  it( 'All the labels should be initialized', () => {
    const element: Array<any> = fixture.debugElement.queryAll( By.css( 'ion-label' ) );

    expect( element[ 0 ].nativeElement.innerHTML ).toContain( 'BMI.HEIGHT (cm)' );
    expect( element[ 1 ].nativeElement.innerHTML ).toContain( 'BMI.WEIGHT (kg)' );
    expect( element[ 2 ].nativeElement.innerHTML ).toContain( 'BMI.WOMAN' );
    expect( element[ 3 ].nativeElement.innerHTML ).toContain( 'BMI.MAN' );
    expect( element[ 4 ].nativeElement.innerHTML ).toContain( 'BMI.RESULT: 0' );
    expect( element[ 5 ].nativeElement.innerHTML ).toContain( 'BMI.CALC' );
    expect( element ).toBeTruthy();
  } );

  describe( 'bmiCalc()', () => {
    it( 'Should return the correct value ', () => {
      const elButton: DebugElement = fixture.debugElement.query( By.css( 'ion-button' ) );

      component.height = 180;
      component.weight = 80;
      elButton.triggerEventHandler( 'click', null );
      expect( component.bmiResult ).toBeLessThan( BmiRange.OVERWEIGHT );
    } );
  } );

  describe( 'getSilhouetteImg()', () => {
    it( 'Should return the correct path of bmiImage', () => {
      const elSelect: Array<DebugElement> = fixture.debugElement.queryAll( By.css( 'ion-radio' ) );

      component.genre = Genre.WOMAN;
      expect( elSelect[ 0 ].nativeElement.value ).toBe( 'woman' );
      expect( component[ 'getSilhouetteImg' ]() ).toBe( `../../assets/img/bmi/bmi_${ elSelect[ 0 ].nativeElement.value }_silhouettes.png` );
      component.genre = Genre.MAN;
      expect( elSelect[ 1 ].nativeElement.value ).toBe( 'man' );
      expect( component[ 'getSilhouetteImg' ]() ).toBe( `../../assets/img/bmi/bmi_${ elSelect[ 1 ].nativeElement.value }_silhouettes.png` );
    } );
  } );

  ///////////////////////////////////////////////////////////////////////////////////////////

  describe( 'WeightOrHeighIsNegativeOrUndefined()', () => {
    let elButtonCalcBmi: HTMLIonButtonElement;
    let divSeparator: HTMLDivElement;
    let divBmiResult: HTMLDivElement;
    let divContenedor: HTMLDivElement;
    beforeEach( () => {
      elButtonCalcBmi = fixture.debugElement.query( By.css( 'ion-button' ) ).nativeElement;
      divSeparator = fixture.debugElement.query( By.css( '.separator' ) ).nativeElement;
      divBmiResult = fixture.debugElement.query( By.css( '.bmi-result' ) ).nativeElement;
      divContenedor = fixture.debugElement.query( By.css( '.contenedor' ) ).nativeElement;
    } );

    function divsImgHidden( height, weight ) {
      component.weight = weight;
      component.height = height;
      component[ 'calcBMI' ]();
      if ( divSeparator.hidden === true &&
        divBmiResult.hidden === true &&
        divContenedor.hidden === true &&
        component.weightAndHeightIsNegative() === true
      ) { return true; } else { return false; }
    }
    function bmiCalcButtonDisabled( height, weight ) {
      component.weight = weight;
      component.height = height;
      if ( elButtonCalcBmi.disabled === true &&
        component.weightOrHeighIsNegativeOrUndefined() === true ) {
        return true;
      } else { return false; }
    }
    it( 'If weight or heigh is less than 0 bmiCalc button is disabled and the images are hiddden ', () => {
      expect( divsImgHidden( -180, 80 ) ).toBeTruthy();
      expect( divsImgHidden( 180, -80 ) ).toBeTruthy();
      expect( divsImgHidden( -180, -80 ) ).toBeTruthy();
      expect( bmiCalcButtonDisabled( -180, 80 ) ).toBeTruthy();
      expect( bmiCalcButtonDisabled( 180, -80 ) ).toBeTruthy();
      expect( bmiCalcButtonDisabled( -180, -80 ) ).toBeTruthy();
    } );
    it( 'If weight or heigh is undefined bmiCalc button is disabled and the images are hiddden ', () => {
      expect( divsImgHidden( undefined, undefined ) ).toBeTruthy();
      expect( divsImgHidden( 180, undefined ) ).toBeTruthy();
      expect( divsImgHidden( undefined, 80 ) ).toBeTruthy();
      expect( bmiCalcButtonDisabled( undefined, undefined ) ).toBeTruthy();
      expect( bmiCalcButtonDisabled( 180, undefined ) ).toBeTruthy();
      expect( bmiCalcButtonDisabled( undefined, 80 ) ).toBeTruthy();
    } );
    it( 'If weight or heigh is 0 bmiCalc button is disabled and the images are hiddden ', () => {
      expect( divsImgHidden( 0, 0 ) ).toBeTruthy();
      expect( divsImgHidden( 180, 0 ) ).toBeTruthy();
      expect( divsImgHidden( 0, 80 ) ).toBeTruthy();
      expect( bmiCalcButtonDisabled( 0, 0 ) ).toBeTruthy();
      expect( bmiCalcButtonDisabled( 180, 0 ) ).toBeTruthy();
      expect( bmiCalcButtonDisabled( 0, 80 ) ).toBeTruthy();
    } );
    it( 'If the weight and height are positives button bmiCalc is enabled and images are visible ', () => {
      expect( divsImgHidden( 180, 80 ) ).toBeFalsy();
      expect( bmiCalcButtonDisabled( 180, 80 ) ).toBeFalsy();
    } );
  } );


  describe( 'updateChoosenSilhouette()', () => {
    let elButton: DebugElement;
    let positionSillhouette: HTMLElement;

    beforeEach( () => {
      fixture.detectChanges();
      component.height = 0;
      component.weight = 0;
      elButton = fixture.debugElement.query( By.css( 'ion-button' ) );
      positionSillhouette = fixture.debugElement.query( By.css( 'div.choosen-silhouette' ) ).nativeElement;
    } );

    it( 'BmiResult.SLIM should place correctly the div.chosen-silhouette', () => {
      component.height = 180;
      component.weight = 50;
      elButton.triggerEventHandler( 'click', null );
      expect( positionSillhouette.style.marginLeft ).toBe( '0%' );
      expect( positionSillhouette.style.right ).toBe( 'initial' );
      expect( positionSillhouette.style.width ).toBe( '16%' );
    } );

    it( 'BmiResult.FIT should place correctly the div.chosen-silhouette', () => {
      component.height = 180;
      component.weight = 70;
      elButton.triggerEventHandler( 'click', null );
      expect( positionSillhouette.style.marginLeft ).toBe( '18%' );
      expect( positionSillhouette.style.right ).toBe( 'initial' );
      expect( positionSillhouette.style.width ).toBe( '18%' );
    } );

    it( 'BmiResult.OVERWEIGHT should place correctly the div.chosen-silhouette', () => {
      component.height = 180;
      component.weight = 90;
      elButton.triggerEventHandler( 'click', null );
      expect( positionSillhouette.style.marginLeft ).toBe( '36%' );
      expect( positionSillhouette.style.right ).toBe( 'initial' );
      expect( positionSillhouette.style.width ).toBe( '18%' );
    } );

    it( 'BmiResult.OBESE should place correctly the div.chosen-silhouette', () => {
      component.height = 180;
      component.weight = 100;
      elButton.triggerEventHandler( 'click', null );
      expect( positionSillhouette.style.marginLeft ).toBe( '0%' );
      expect( positionSillhouette.style.right ).toBe( '24%' );
      expect( positionSillhouette.style.width ).toBe( '17%' );
    } );

    it( 'BmiResult.MORBID should place correctly the div.chosen-silhouette', () => {
      component.height = 180;
      component.weight = 120;
      elButton.triggerEventHandler( 'click', null );
      expect( positionSillhouette.style.marginLeft ).toBe( '0%' );
      expect( positionSillhouette.style.right ).toBe( '17px' );
      expect( positionSillhouette.style.width ).toBe( '19%' );
    } );
  } );
} );
