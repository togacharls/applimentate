import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AllergensPage } from './pages/allergens-list/allergens.page';
import { AllergensDetailPage } from './pages/allergens-detail/allergens-detail.page';

import { AllergensService } from './services';
import { AllergenSummaryPage } from './pages/allergen-summary/allergen-summary.page';
import { AllergenHealthPage } from './pages/allergen-health/allergen-health.page';
import { AllergenFoodPage } from './pages/allergen-food/allergen-food.page';
import { AllergenSummaryPageModule } from './pages/allergen-summary/allergen-summary.module';
import { AllergenHealthPageModule } from './pages/allergen-health/allergen-health.module';
import { AllergenFoodPageModule } from './pages/allergen-food/allergen-food.module';

const routes: Routes = [
  { path: '', component: AllergensPage },
  {
    path: ':id', component: AllergensDetailPage,
    children: [
      {
        path: 'Health',
        loadChildren: './pages/allergen-health/allergen-health.module#AllergenHealthPageModule',
      },
      {
        path: 'Summary',
        loadChildren: './pages/allergen-summary/allergen-summary.module#AllergenSummaryPageModule',
      },
      {
        path: 'Food',
        loadChildren: './pages/allergen-food/allergen-food.module#AllergenFoodPageModule',
      },
    ]
  },
];

@NgModule( {
  imports: [
    AllergenSummaryPageModule,
    AllergenHealthPageModule,
    AllergenFoodPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild( routes )
  ],
  declarations: [
    AllergensPage,
    AllergensDetailPage,
    AllergenSummaryPage,
    AllergenHealthPage,
    AllergenFoodPage ],
  providers: [ AllergensService ],
} )
export class AllergensModule { }
