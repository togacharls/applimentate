import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllergenSummaryPage } from './allergen-summary.page';
import { TranslateModule } from '@ngx-translate/core';
import { AllergenTabsPageModule } from '../allergen-tabs/allergen-tabs.module';

const routes: Routes = [
  {
    path: '',
    component: AllergenSummaryPage
  }
];

@NgModule( {
  imports: [
    AllergenTabsPageModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( routes )
  ],
  declarations: [ AllergenSummaryPage ],
  exports: [ AllergenSummaryPage ]
} )
export class AllergenSummaryPageModule { }
