import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'allergens', loadChildren: './allergens/allergens.module#AllergensModule' },
  { path: 'allergenTabs', loadChildren: './allergens/pages/allergen-tabs/allergen-tabs.module#AllergenTabsPageModule' },


];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
