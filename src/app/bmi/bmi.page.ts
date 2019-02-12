import { Component, OnInit } from '@angular/core';

// export enum Sex { 'Man', 'Woman' }
// export enum weightMeter { 'slim', 'fit', 'normal', 'fat', 'fatest' }
// export enum colorWeight { 'aqua', 'lime', 'yellow', 'orange', 'red' }
@Component( {
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: [ './bmi.page.scss' ],
} )
export class BmiPage implements OnInit {

  private height: number;
  private weight: number;
  public bmiResult = 0;

  public adjustImgLeft = 0;

  constructor () { }

  ngOnInit() { }

  // changeSex(): void {
  //   this.selectedSex === Sex[ 0 ]
  //     ? this.selectedSex = Sex[ 1 ]
  //     : this.selectedSex = Sex[ 0 ];
  // }

  calcBMI(): void {
    const result: number = this.weight / ( ( this.height / 100 ) * ( this.height / 100 ) );
    switch ( true ) {
      case ( result <= 18.5 ):
        this.adjustImgLeft = -5;
        break;
      case ( result > 18.5 && result <= 24.9 ):
        this.adjustImgLeft = -254;
        break;
      case ( result > 24.9 && result <= 29.9 ):
        this.adjustImgLeft = -508;
        break;
      case ( result > 29.9 && result <= 34.9 ):
        this.adjustImgLeft = -762;
        break;
      case ( result > 34.9 ):
        this.adjustImgLeft = -1016;
        break;
    }
    isNaN( result ) || result === Infinity
      ? this.bmiResult = 0
      : this.bmiResult = result;
  }

}

