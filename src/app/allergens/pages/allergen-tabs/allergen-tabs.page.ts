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

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }
  allergen: AllergenDetailInterface;

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenById( this.route.snapshot.params[ 'id' ] );
    console.log( this.route.snapshot );
  }

  ionViewDidEnter() {
    // this.tabRef.select( 0 );
  }
}
