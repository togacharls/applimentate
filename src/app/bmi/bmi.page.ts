import {Component, ElementRef, OnInit} from '@angular/core';
import {Genre} from "./enums/bmi.genre.enum";
import {BmiRange} from "./enums/bmi.bmi-range.enum";

// export enum colorWeight { 'aqua', 'lime', 'yellow', 'orange', 'red' }
@Component( {
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: [ './bmi.page.scss' ],
} )
export class BmiPage implements OnInit {

  private height: number;
  private weight: number;
  private genre: Genre;

  public bmiResult = 0;
  protected readonly GenreEnum = Genre;
  constructor (private elRef:ElementRef) { }

  ngOnInit() {
    this.genre = Genre.WOMAN;
  }

  onClickCalcBMI(): void {
    this.calcBMI();
    this.updateChoosenSilhouette();
  }

  disableCalcBMI(): boolean {
    return !this.height || !this.weight;
  }

  protected getSilhouetteImg(): string {
    return'../../assets/img/bmi/bmi_' + this.genre + '_silhouettes.png';
  }

  private calcBMI(): void {
    const result: number = this.weight / ( ( this.height / 100 ) * ( this.height / 100 ) );
    isNaN( result ) || result === Infinity
      ? this.bmiResult = 0
      : this.bmiResult = result;
  }

  private updateChoosenSilhouette(): void {
    const choosenSilhouette = this.elRef.nativeElement.querySelector('div.choosen-silhouette');
    if (this.bmiResult < BmiRange.FIT) {
      choosenSilhouette.style.marginLeft = '0';
    } else if (this.bmiResult < BmiRange.OVERWEIGHT) {
      choosenSilhouette.style.marginLeft = '20%';
    } else if (this.bmiResult < BmiRange.OBESE) {
      choosenSilhouette.style.marginLeft = '40%';
    } else if (this.bmiResult < BmiRange.MORBID) {
      choosenSilhouette.style.marginLeft = '60%';
    } else {
      choosenSilhouette.style.marginLeft = '80%';
    }
  }
}

