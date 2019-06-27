import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {IonicModule, NavController} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Genre} from './enums/bmi.genre.enum';
import {DebugElement} from '@angular/core';
import {combineReducers, Store, StoreModule} from '@ngrx/store';
import {BmiPage} from './bmi.page';
import {BmiRange} from './enums/bmi.bmi-range.enum';
import {AppState} from '../app.state';
import * as BMI_REDUCERS from './bmi.reducers';

describe('BmiPage html elements', () => {
  let component: BmiPage;
  let fixture: ComponentFixture<BmiPage>;
  let store: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmiPage],
      imports: [
        IonicModule,
        TranslateModule.forRoot(),
        FormsModule,
        RouterTestingModule,
        StoreModule.forRoot({
          'BMI' : combineReducers(BMI_REDUCERS.genre)
        })
      ],
      providers: [
        {provide: NavController, useValue: null}
      ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(BmiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Should create a title and is translatable ', () => {
    const element: any = fixture.debugElement.query(By.css('ion-title')).nativeElement;

    expect(element).toBeTruthy();
    expect(element.translate).toBeTruthy();
    expect(element.innerHTML).toContain('BMI.SUBTITLE');
  });

  it('Should have a back button', () => {
    const element: HTMLIonBackButtonElement = fixture.debugElement.query(By.css('ion-back-button')).nativeElement;

    expect(element).toBeTruthy();
  });

  it('All the labels should be initialized', () => {
    const element: Array<any> = fixture.debugElement.queryAll(By.css('ion-label'));

    expect(element[0].nativeElement.innerHTML).toContain('BMI.HEIGHT (cm)');
    expect(element[1].nativeElement.innerHTML).toContain('BMI.WEIGHT (kg)');
    expect(element[2].nativeElement.innerHTML).toContain('BMI.WOMAN');
    expect(element[3].nativeElement.innerHTML).toContain('BMI.MAN');
    expect(element[4].nativeElement.innerHTML).toContain('BMI.RESULT: 0');
    expect(element[5].nativeElement.innerHTML).toContain('BMI.CALC');
    expect(element).toBeTruthy();
  });

  describe('getSilhouetteImg()', () => {
    it('Should return the correct path of bmiImage', () => {
      const elSelect: Array<DebugElement> = fixture.debugElement.queryAll(By.css('ion-radio'));

      component.genre = Genre.WOMAN;
      expect(elSelect[0].nativeElement.value).toBe('woman');
      expect(component['getSilhouetteImg']()).toBe(`../../assets/img/bmi/bmi_${ elSelect[0].nativeElement.value }_silhouettes.png`);
      component.genre = Genre.MAN;
      expect(elSelect[1].nativeElement.value).toBe('man');
      expect(component['getSilhouetteImg']()).toBe(`../../assets/img/bmi/bmi_${ elSelect[1].nativeElement.value }_silhouettes.png`);
    });
  });

  describe('disableCalcBMI()', () => {
    it('Should disable tbe button of bmiCalc', () => {
      component.height = undefined;
      component.weight = undefined;
      expect(component.disableCalcBMI()).toBeTruthy();
      component.height = 180;
      component.weight = 80;
      expect(component.disableCalcBMI()).toBeFalsy();
    });
  });

  describe('updateChoosenSilhouette()', () => {
    let elButton: DebugElement;
    let positionSillhouette: HTMLElement;

    beforeEach(() => {
      component.height = 0;
      component.weight = 0;
      elButton = fixture.debugElement.query(By.css('ion-button'));
      positionSillhouette = fixture.debugElement.query(By.css('div.choosen-silhouette')).nativeElement;
    });

    it('Should place correctly the div.chosen-silhouette when BmiResult is SLIM', () => {
      component.height = 180;
      component.weight = 50;
      elButton.triggerEventHandler('click', null);
      expect(component.bmiResult).toBeLessThan(BmiRange.SLIM);
      expect(positionSillhouette.style.marginLeft).toBe('0%');
      expect(positionSillhouette.style.right).toBe('initial');
      expect(positionSillhouette.style.width).toBe('16%');
    });

    it('Should place correctly the div.chosen-silhouette when BmiResult is FIT', () => {
      component.height = 180;
      component.weight = 70;
      elButton.triggerEventHandler('click', null);
      expect(component.bmiResult).toBeLessThan(BmiRange.FIT);
      expect(positionSillhouette.style.marginLeft).toBe('18%');
      expect(positionSillhouette.style.right).toBe('initial');
      expect(positionSillhouette.style.width).toBe('18%');
    });

    it('Should place correctly the div.chosen-silhouette when BmiResult is OVERWEIGHT', () => {
      component.height = 180;
      component.weight = 90;
      elButton.triggerEventHandler('click', null);
      expect(component.bmiResult).toBeLessThan(BmiRange.OVERWEIGHT);
      expect(positionSillhouette.style.marginLeft).toBe('36%');
      expect(positionSillhouette.style.right).toBe('initial');
      expect(positionSillhouette.style.width).toBe('18%');
    });

    it('Should place correctly the div.chosen-silhouette when BmiResult is OBESE', () => {
      component.height = 180;
      component.weight = 100;
      elButton.triggerEventHandler('click', null);
      expect(component.bmiResult).toBeLessThan(BmiRange.OBESE);
      expect(positionSillhouette.style.marginLeft).toBe('0%');
      expect(positionSillhouette.style.right).toBe('24%');
      expect(positionSillhouette.style.width).toBe('17%');
    });

    it('Should place correctly the div.chosen-silhouette when BmiResult is MORBID', () => {
      component.height = 180;
      component.weight = 120;
      elButton.triggerEventHandler('click', null);
      expect(component.bmiResult).toBeLessThan(BmiRange.MORBID);
      expect(positionSillhouette.style.marginLeft).toBe('0%');
      expect(positionSillhouette.style.right).toBe('17px');
      expect(positionSillhouette.style.width).toBe('19%');
    });
  });
});
