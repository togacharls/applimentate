import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, IonRouterOutlet } from '@ionic/angular';

import { AllergenTabsPage } from './allergen-tabs.page';
import { AllergenFoodPage } from '../allergen-food/allergen-food.page';
import { AllergenHealthPage } from '../allergen-health/allergen-health.page';
import { AllergenSummaryPage } from '../allergen-summary/allergen-summary.page';
import { TranslateModule } from '@ngx-translate/core';
import { AllergenSummaryPageModule } from '../allergen-summary/allergen-summary.module';
import { AllergenHealthPageModule } from '../allergen-health/allergen-health.module';
import { AllergenFoodPageModule } from '../allergen-food/allergen-food.module';

const routes: Routes = [
  // {
  //   path: 'ALLERGENS.LUPINS/Food',
  //   component: AllergenFoodPage
  // },
  // {
  //   path: 'ALLERGENS.LUPINS/Health',
  //   component: AllergenHealthPage
  // },
  {
    path: 'ALLERGENS.LUPINS/Summary',
    component: AllergenSummaryPage
  },
  {
    path: 'tabs',
    component: AllergenTabsPage,
    children: [
      {
        path: 'summary',
        outlet: 'summary',
        loadChildren: '../allergen-summary/allergen-summary.module#AllergenSummaryPageModule'
      },
      // {
      //   path: 'Health',
      //   outlet: 'Health',
      //   component: AllergenHealthPage
      // },
      //   {
      //   path: 'Summary',
      //   outlet: 'Summary',
      //   component: AllergenSummaryPage
      // },
    ]
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
  declarations: [ AllergenTabsPage ],
  exports: [ AllergenTabsPage ]
} )
export class AllergenTabsPageModule { }
