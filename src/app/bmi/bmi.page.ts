import { Component, OnInit } from '@angular/core';

export enum Sex { 'Man', 'Woman' }
export enum weightMeter { 'slim', 'fit', 'normal', 'fat', 'fatest' }
export enum colorWeight { 'aqua', 'lime', 'yellow', 'orange', 'red' }
@Component( {
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: [ './bmi.page.scss' ],
} )
export class BmiPage implements OnInit {

  private height: number;
  private weight: number;
  public bmiResult = 0;

  public selectedSex: any = Sex[ 0 ]; // 'man'
  public selectedWeight: any; // 'slim'
  public colorAcordingWeight: any; // 'aqua'

  constructor () { }

  ngOnInit() { }

  changeSex(): void {
    this.selectedSex === Sex[ 0 ]
      ? this.selectedSex = Sex[ 1 ]
      : this.selectedSex = Sex[ 0 ];
  }

  calcBMI(): void {
    const result: number = this.weight / ( ( this.height / 100 ) * ( this.height / 100 ) );
    switch ( true ) {
      case ( result <= 18 ):
        this.selectedWeight = weightMeter[ 0 ];
        this.colorAcordingWeight = colorWeight[ 0 ];
        break;
      case ( result > 18 && result <= 24 ):
        this.selectedWeight = weightMeter[ 1 ];
        this.colorAcordingWeight = colorWeight[ 1 ];
        break;
      case ( result > 24 && result <= 29 ):
        this.selectedWeight = weightMeter[ 2 ];
        this.colorAcordingWeight = colorWeight[ 2 ];
        break;
      case ( result > 29 && result <= 39 ):
        this.selectedWeight = weightMeter[ 3 ];
        this.colorAcordingWeight = colorWeight[ 3 ];
        break;
      case ( result > 39 ):
        this.selectedWeight = weightMeter[ 4 ];
        this.colorAcordingWeight = colorWeight[ 4 ];
        break;
    }
    isNaN( result ) || result === Infinity
      ? this.bmiResult = 0
      : this.bmiResult = result;
  }

}

