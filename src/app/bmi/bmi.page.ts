import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: [ './bmi.page.scss' ],
} )
export class BmiPage implements OnInit {

  height: number;
  weight: number;
  bmi = 0;
  sex = [ 'Man', 'Woman' ];
  selecSex: string = this.sex[ 0 ];
  typeWeight = [ 'slim', 'fit', 'normal', 'fat', 'fatest' ];
  colorWeight = [ 'aqua', 'lime', 'yellow', 'orange', 'red' ];
  idxWeight = 0;
  selecWeight: string = this.typeWeight[ this.idxWeight ];


  constructor () { }

  ngOnInit() { }

  changeSex(): void {
    this.selecSex === this.sex[ 0 ]
      ? this.selecSex = this.sex[ 1 ]
      : this.selecSex = this.sex[ 0 ];
  }

  calcBMI(): void {
    const resultado: number = this.weight / ( ( this.height / 100 ) * ( this.height / 100 ) );
    switch ( true ) {
      case ( resultado <= 18 ):
        this.selecWeight = this.typeWeight[ 0 ];
        this.idxWeight = 0;
        break;
      case ( resultado > 18 && resultado <= 24 ):
        this.selecWeight = this.typeWeight[ 1 ];
        this.idxWeight = 1;
        break;
      case ( resultado > 24 && resultado <= 29 ):
        this.selecWeight = this.typeWeight[ 2 ];
        this.idxWeight = 2;
        break;
      case ( resultado > 29 && resultado <= 39 ):
        this.selecWeight = this.typeWeight[ 3 ];
        this.idxWeight = 3;
        break;
      case ( resultado > 39 ):
        this.selecWeight = this.typeWeight[ 4 ];
        this.idxWeight = 4;
        break;
    }
    isNaN( resultado ) || resultado === Infinity
      ? this.bmi = 0
      : this.bmi = resultado;
  }
}
