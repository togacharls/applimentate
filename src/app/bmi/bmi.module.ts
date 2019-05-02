import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { BmiPage } from './bmi.page';
import { ToPositiveNumberDirective } from '../directives/to-positive-number.directive';
import * as BMI_REDUCERS from './bmi.reducers';

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
    RouterModule.forChild( routes ),
    StoreModule.forFeature('BMI', BMI_REDUCERS.genre)
  ],
  declarations: [ BmiPage, ToPositiveNumberDirective ]
} )
export class BmiPageModule { }
