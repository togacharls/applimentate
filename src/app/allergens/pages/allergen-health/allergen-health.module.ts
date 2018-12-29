import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllergenHealthPage } from './allergen-health.page';
import { TranslateModule } from '@ngx-translate/core';
import { AllergenTabsPageModule } from '../allergen-tabs/allergen-tabs.module';
import { AllergensService } from '../../services/allergens.service';

// const routes: Routes = [
//   {
//     path: '',
//     component: AllergenHealthPage
//   }
// ];

@NgModule( {
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild( routes )
  ],
  declarations: [],
  // exports: [ RouterModule ],
  providers: [ AllergensService ]
} )
export class AllergenHealthPageModule { }
