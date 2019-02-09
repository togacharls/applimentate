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

  constructor () { }

  ngOnInit() { }

  calcBMI() {
    const resultado = this.weight / ( ( this.height / 100 ) * ( this.height / 100 ) );
    isNaN( resultado ) || resultado === Infinity
      ? this.bmi = 0
      : this.bmi = resultado;
  }
}
