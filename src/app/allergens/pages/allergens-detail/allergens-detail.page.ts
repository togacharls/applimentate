import { Tabs } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AllergenDetailInterface } from '../../interfaces/allergen.interface';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergens-details',
  templateUrl: './allergens-detail.page.html',
  styleUrls: [ './allergens-detail.page.scss' ],
} )
export class AllergensDetailPage implements OnInit {
  allergen: AllergenDetailInterface;
  @ViewChild( 'tabSelectedByDefaultSummary' ) tabRef: Tabs;
  imgStackSummary = [ 'allergen.imgSummary01', 'allergen.imgSummary02', 'allergen.imgSummary03' ];

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenById( this.route.snapshot.params[ 'id' ] );
  }

  ionViewDidEnter() {
    this.tabRef.select( 0 );
  }
}
