import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllergenFoodPage } from './allergen-food.page';
import { TranslateModule } from '@ngx-translate/core';
import { AllergenTabsPageModule } from '../allergen-tabs/allergen-tabs.module';

const routes: Routes = [
  {
    path: '',
    component: AllergenFoodPage
  }
];

@NgModule( {
  imports: [
    AllergenTabsPageModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( routes )
  ],
  declarations: [ AllergenFoodPage ],
  exports: [ AllergenFoodPage ]
} )
export class AllergenFoodPageModule { }
