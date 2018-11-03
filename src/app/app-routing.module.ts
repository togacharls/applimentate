import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'allergens', loadChildren: './allergens/allergens.module#AllergensPageModule' },
  { path: 'allergensDetails', loadChildren: './allergens/allergens-details/allergens-details.module#AllergensDetailsPageModule' },

];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
