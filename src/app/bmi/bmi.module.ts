import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { BmiPage } from './bmi.page';
import { OnlyNumberDirective } from '../directives/only-number.directive';

const routes: Routes = [
  {
    path: '',
    component: BmiPage
  }
];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild( routes )
  ],
  exports: [ OnlyNumberDirective ],
  declarations: [ BmiPage, OnlyNumberDirective ]
} )
export class BmiPageModule { }
