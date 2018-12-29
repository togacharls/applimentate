import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { AllergensService } from '../../services/allergens.service';
import { AllergenFoodPage } from './allergen-food.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: AllergenFoodPage
//   }
// ];

@NgModule( {
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild( routes )
  ],
  declarations: [],
  providers: [ AllergensService ],
  // exports: [ RouterModule ]

} )
export class AllergenFoodPageModule { }
