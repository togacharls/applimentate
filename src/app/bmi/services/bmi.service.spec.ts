import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BmiService } from './';
import { BmiRange } from '../enums/bmi.bmi-range.enum';

describe( 'BmiService', () => {
  beforeEach( () => TestBed.configureTestingModule( {
    imports: [TranslateModule.forRoot()]
  } ) );

  it( 'should be created', () => {
    const service: BmiService = TestBed.get( BmiService );
    expect( service ).toBeTruthy();
  } );

  describe('calcBMI()', () => {
    it( 'Should return a fourteen elements list', () => {
      const service: BmiService = TestBed.get( BmiService ),
        bmiResult = service.calcBMI( 172, 72);
      expect( bmiResult ).toBeLessThan( BmiRange.MORBID );
    });
  });

  describe('silhouetteStylesDependingOnBmiResult()', () => {
    it('Should return the expected styles when BmiResult is SLIM', () => {
      const service: BmiService = TestBed.get( BmiService );
      const style = service.silhouetteStylesDependingOnBmiResult(BmiRange.SLIM);
      expect(style.marginLeft).toBe('0%');
      expect(style.right).toBe('initial');
      expect(style.width).toBe('16%');
    });

    it('Should return the expected styles when BmiResult is FIT', () => {
      const service: BmiService = TestBed.get( BmiService );
      const style = service.silhouetteStylesDependingOnBmiResult(BmiRange.FIT);
      expect(style.marginLeft).toBe('18%');
      expect(style.right).toBe('initial');
      expect(style.width).toBe('18%');
    });

    it('Should return the expected styles when BmiResult is OVERWEIGHT', () => {
      const service: BmiService = TestBed.get( BmiService );
      const style = service.silhouetteStylesDependingOnBmiResult(BmiRange.OVERWEIGHT);
      expect(style.marginLeft).toBe('36%');
      expect(style.right).toBe('initial');
      expect(style.width).toBe('18%');
    });

    it('Should return the expected styles when BmiResult is OBESE', () => {
      const service: BmiService = TestBed.get( BmiService );
      const style = service.silhouetteStylesDependingOnBmiResult(BmiRange.OBESE);
      expect(style.marginLeft).toBe('0%');
      expect(style.right).toBe('24%');
      expect(style.width).toBe('17%');
    });

    it('Should return the expected styles when BmiResult is MORBID', () => {
      const service: BmiService = TestBed.get( BmiService );
      const style = service.silhouetteStylesDependingOnBmiResult(BmiRange.MORBID);
      expect(style.marginLeft).toBe('0%');
      expect(style.right).toBe('17px');
      expect(style.width).toBe('19%');
    });
  });
});
