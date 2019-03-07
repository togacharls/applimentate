import { Component, ElementRef, OnInit } from '@angular/core';
import { Genre } from './enums/bmi.genre.enum';
import { BmiRange } from './enums/bmi.bmi-range.enum';

@Component( {
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: [ './bmi.page.scss' ],
} )
export class BmiPage implements OnInit {

  public height: number;
  public weight: number;
  public genre: Genre;

  public bmiResult = 0;
  public readonly GenreEnum = Genre;

  constructor ( private elRef: ElementRef ) {
  }

  ngOnInit() {
    this.genre = Genre.WOMAN;
  }

  onClickCalcBMI(): void {
    this.calcBMI();
    this.updateChoosenSilhouette();
  }

  // Divs with the images are hidden if some value is not positive
  weightAndHeightIsNegative(): boolean {
    if ( this.bmiResult > 0 && this.height > 0 && this.weight > 0 ) {
      return false;
    } else { return true; }
  }

  weightOrHeighIsNegativeOrUndefined(): boolean {
    if ( this.weight <= 0 || this.weight === undefined || this.height <= 0 || this.height === undefined ) {
      this.bmiResult = 0; return true;
    } else { return false; }
  }

  getSilhouetteImg(): string {
    return '../../assets/img/bmi/bmi_' + this.genre + '_silhouettes.png';
  }

  private calcBMI(): void {
    const result: number = this.weight / ( ( this.height / 100 ) * ( this.height / 100 ) );
    isNaN( result ) || result === Infinity
      ? this.bmiResult = 0
      : this.bmiResult = result;
  }

  private updateChoosenSilhouette(): void {
    const choosenSilhouette = this.elRef.nativeElement.querySelector( 'div.choosen-silhouette' );
    if ( this.bmiResult <= BmiRange.SLIM ) {
      choosenSilhouette.style.marginLeft = '0%';
      choosenSilhouette.style.right = 'initial';
      choosenSilhouette.style.width = '16%';
    } else if ( this.bmiResult <= BmiRange.FIT ) {
      choosenSilhouette.style.marginLeft = '18%';
      choosenSilhouette.style.right = 'initial';
      choosenSilhouette.style.width = '18%';
    } else if ( this.bmiResult <= BmiRange.OVERWEIGHT ) {
      choosenSilhouette.style.marginLeft = '36%';
      choosenSilhouette.style.right = 'initial';
      choosenSilhouette.style.width = '18%';
    } else if ( this.bmiResult <= BmiRange.OBESE ) {
      choosenSilhouette.style.marginLeft = '0%';
      choosenSilhouette.style.right = '24%';
      choosenSilhouette.style.width = '17%';
    } else {
      choosenSilhouette.style.marginLeft = '0%';
      choosenSilhouette.style.right = '17px';
      choosenSilhouette.style.width = '19%';
    }
  }
}
