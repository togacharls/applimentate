import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllergenHealthPage } from './allergen-health.page';
import { TranslateModule } from '@ngx-translate/core';
import { AllergenTabsPageModule } from '../allergen-tabs/allergen-tabs.module';

const routes: Routes = [
  {
    path: '',
    component: AllergenHealthPage
  }
];

@NgModule( {
  imports: [
    TranslateModule,
    AllergenTabsPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( routes )
  ],
  declarations: [ AllergenHealthPage ],
  exports: [ AllergenHealthPage ]
} )
export class AllergenHealthPageModule { }
