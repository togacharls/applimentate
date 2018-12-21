import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllergenHealthPage } from './allergen-health.page';

const routes: Routes = [
  {
    path: '',
    component: AllergenHealthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllergenHealthPage]
})
export class AllergenHealthPageModule {}
