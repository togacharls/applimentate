import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'allergens', loadChildren: './allergens/allergens.module#AllergensModule' },  { path: 'allergenTabs', loadChildren: './allergens/pages/allergen-tabs/allergen-tabs.module#AllergenTabsPageModule' },
  { path: 'allergenSummary', loadChildren: './allergens/pages/allergen-summary/allergen-summary.module#AllergenSummaryPageModule' },
  { path: 'allergenHealth', loadChildren: './allergens/pages/allergen-health/allergen-health.module#AllergenHealthPageModule' },
  { path: 'allergenFood', loadChildren: './allergens/pages/allergen-food/allergen-food.module#AllergenFoodPageModule' }

];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
