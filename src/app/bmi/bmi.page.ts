import { Component, ElementRef, OnInit } from '@angular/core';
import { Genre } from './enums/bmi.genre.enum';
import { BmiRange } from './enums/bmi.bmi-range.enum';

@Component( {
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: [ './bmi.page.scss' ],
  // directives: [ OnlyNumberDirective ],

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

  // onKeyPress($event): boolean {
  //   if($event.key && !$event.key.match(/[0-9]/)){
  //     $event.preventDefault();
  //     return false;
  //   }
  //   return true;
  // }

  dime( event ) {
    // console.log( event );
  }

  disableCalcBMI(): boolean {
    return !this.height || !this.weight;
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
