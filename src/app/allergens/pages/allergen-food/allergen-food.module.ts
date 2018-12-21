import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllergenFoodPage } from './allergen-food.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: AllergenFoodPage
  }
];

@NgModule( {
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( routes )
  ],
  declarations: [ AllergenFoodPage ]
} )
export class AllergenFoodPageModule { }
