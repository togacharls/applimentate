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
import { AllergenTabsPageModule } from './pages/allergen-tabs/allergen-tabs.module';

const routes: Routes = [
  { path: '', component: AllergensPage },
  { path: ':id', component: AllergensDetailPage },
  { path: ':id/Summary', component: AllergenSummaryPage },
  { path: ':id/health', component: AllergenHealthPage },
  { path: ':id/Food', component: AllergenFoodPage }
];

@NgModule( {
  imports: [
    AllergenTabsPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild( routes )
  ],
  declarations: [ AllergensPage, AllergensDetailPage ],
  providers: [ AllergensService ]
} )
export class AllergensModule { }
