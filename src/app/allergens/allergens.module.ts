import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { AllergensPage } from './pages/allergens-list/allergens.page';
import { AllergenDetailPage } from './pages/allergen-detail/allergen-detail.page';
import { AllergensService } from './services';

const routes: Routes = [
  { path: '', component: AllergensPage },
  { path: ':id', component: AllergenDetailPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ AllergensPage, AllergenDetailPage ],
  providers: [ AllergensService ]
})
export class AllergensModule {}
