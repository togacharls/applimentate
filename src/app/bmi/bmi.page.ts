import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BmiPage implements OnInit {

  height: number;
  weight: number;
  bmi: number;

  constructor() { }

  ngOnInit() {
    this.height = null;
    this.weight = null;
    this.bmi = null;
  }

  calcBMI(): void {
    this.bmi = (this.weight / ((this.height/100) * (this.height/100)));
  }

}
