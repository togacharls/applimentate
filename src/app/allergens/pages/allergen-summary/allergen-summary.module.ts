import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllergenSummaryPage } from './allergen-summary.page';
import { TranslateModule } from '@ngx-translate/core';
import { AllergensService } from '../../services/allergens.service';

// const routes: Routes = [
//   {
//     path: '',
//     component: AllergenSummaryPage
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
  // exports: [ RouterModule ],
  providers: [ AllergensService ]
} )
export class AllergenSummaryPageModule { }
