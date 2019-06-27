import {Injectable} from '@angular/core';
import {BmiRange} from '../enums/bmi.bmi-range.enum';

@Injectable( {
  providedIn: 'root'
} )
export class BmiService {

  public calcBMI(height: number, weight: number): number {
    const result: number = weight / ( ( height / 100 ) * ( height / 100 ) );
    return !isNaN( result ) && result !== Infinity ? result : 0;
  }

  public silhouetteStylesDependingOnBmiResult(bmiResult: number): any {
    const styles: any = {};
    if ( bmiResult <= BmiRange.SLIM ) {
      styles.marginLeft = '0%';
      styles.right = 'initial';
      styles.width = '16%';
    } else if ( bmiResult <= BmiRange.FIT ) {
      styles.marginLeft = '18%';
      styles.right = 'initial';
      styles.width = '18%';
    } else if ( bmiResult <= BmiRange.OVERWEIGHT ) {
      styles.marginLeft = '36%';
      styles.right = 'initial';
      styles.width = '18%';
    } else if ( bmiResult <= BmiRange.OBESE ) {
      styles.marginLeft = '0%';
      styles.right = '24%';
      styles.width = '17%';
    } else {
      styles.marginLeft = '0%';
      styles.right = '17px';
      styles.width = '19%';
    }
    return styles;
  }
}
