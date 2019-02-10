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
  selecSex = this.sex[ 0 ];
  typeWeight = [ 'slim', 'fit', 'normal', 'fat', 'fatest' ];
  idxWeight = 0;
  selecWeight = this.typeWeight[ this.idxWeight ];

  constructor () { }

  ngOnInit() { }

  changeSex() {
    this.selecSex === this.sex[ 0 ]
      ? this.selecSex = this.sex[ 1 ]
      : this.selecSex = this.sex[ 0 ];
  }

  changeImg() {
    this.idxWeight++;
    if ( this.idxWeight > 4 ) { this.idxWeight = 0; }
    this.selecWeight = this.typeWeight[ this.idxWeight ];
  }

  calcBMI() {
    const resultado = this.weight / ( ( this.height / 100 ) * ( this.height / 100 ) );
    isNaN( resultado ) || resultado === Infinity
      ? this.bmi = 0
      : this.bmi = resultado;
  }
}
