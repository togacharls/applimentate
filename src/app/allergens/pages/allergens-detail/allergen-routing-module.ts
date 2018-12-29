import { AllergensDetailPage } from './allergens-detail.page';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AllergenSummaryPageModule } from '../allergen-summary/allergen-summary.module';


// const routes: Routes = [
//   {
//     path: '',
//     component: AllergensDetailPage,
//     children: [
//       { path: 'ALLERGENS.LUPINS/Summary', loadChildren: '../allergen-summary/allergen-summary.module#AllergenSummaryPageModule' }
//     ]
//   }
// ];

@NgModule( {
  imports: [
    // AllergenSummaryPageModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild( routes )
  ],
  declarations: [],
  // exports: [ RouterModule ]
} )
export class AllergenRoutingModule { }
