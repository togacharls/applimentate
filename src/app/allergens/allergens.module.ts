import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllergensPage } from './allergens.page';
import { AllergensService } from './services';
import {AllergensDetailPage} from './allergens-detail/allergens-detail.page';

const routes: Routes = [
  { path: '', component: AllergensPage },
  { path: ':id', component: AllergensDetailPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ AllergensPage, AllergensDetailPage ],
  providers: [AllergensService]
})
export class AllergensModule {}
