import { Tabs } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AllergenDetailInterface } from '../../interfaces/allergen.interface';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergen-tabs',
  templateUrl: './allergen-tabs.page.html',
  styleUrls: [ './allergen-tabs.page.scss' ],
} )
export class AllergenTabsPage implements OnInit {
  allergen: AllergenDetailInterface;
  @ViewChild( 'tabSelectedByDefaultSummary' ) tabRef: Tabs;

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenById( this.route.snapshot.params[ 'id' ] );
  }

  ionViewDidEnter() {
    // this.tabRef.select( 0 );
  }
}
