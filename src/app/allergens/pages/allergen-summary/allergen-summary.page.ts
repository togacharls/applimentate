import { Component, OnInit } from '@angular/core';
import { AllergenDetailInterface } from '../../interfaces/allergen.interface';
import { ActivatedRoute } from '@angular/router';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergen-summary',
  templateUrl: './allergen-summary.page.html',
  styleUrls: [ './allergen-summary.page.scss' ],
} )
export class AllergenSummaryPage implements OnInit {

  allergen: AllergenDetailInterface;

  allergenPath: string;

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) {

  }

  Dale() {
    console.log( this.route.snapshot.routeConfig );
    console.log( this.allergenPath );
  }

  ngOnInit() {
    this.allergenPath = this.allergensService.getAllergenNameFromPath( this.route.snapshot.routeConfig.path );
    this.allergen = this.allergensService.getAllergenById( this.allergenPath );
    console.log( this.route.url );
  }
}
