import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllergenTabsPage } from './allergen-tabs.page';
import { AllergenFoodPage } from '../allergen-food/allergen-food.page';
import { AllergenHealthPage } from '../allergen-health/allergen-health.page';
import { AllergenSummaryPage } from '../allergen-summary/allergen-summary.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  // {
  //   path: 'food',
  //   component: AllergenFoodPage
  // },
  // {
  //   path: 'Health',
  //   component: AllergenHealthPage
  // },
  // {
  //   path: 'Summary',
  //   component: AllergenSummaryPage
  // },
  {
    path: 'ALLERGENS.LUPINS/Summary',
    component: AllergenSummaryPage
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
  declarations: [ AllergenTabsPage, AllergenSummaryPage ],
  exports: [ AllergenTabsPage ]
} )
export class AllergenTabsPageModule { }
