import { Tabs } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AllergenDetailInterface } from '../../interfaces/allergen.interface';
import { AllergensService } from '../../services/allergens.service';
import { AllergenSummaryPage } from '../allergen-summary/allergen-summary.page';

@Component( {
  selector: 'app-allergen-tabs',
  templateUrl: './allergen-tabs.page.html',
  styleUrls: [ './allergen-tabs.page.scss' ],
} )
export class AllergenTabsPage implements OnInit {

  allergen: AllergenDetailInterface;

  allergenPath: string;

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) {

  }

  ngOnInit() {
    this.allergenPath = this.allergensService.getAllergenNameFromPath( this.route.snapshot.routeConfig.path );
    this.allergen = this.allergensService.getAllergenById( this.allergenPath );
    console.log( this.allergenPath );
  }
}
