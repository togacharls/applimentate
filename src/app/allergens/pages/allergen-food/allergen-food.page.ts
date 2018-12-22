import { Component, OnInit } from '@angular/core';
import { AllergenDetailInterface } from '../../interfaces/allergen.interface';
import { ActivatedRoute } from '@angular/router';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergen-food',
  templateUrl: './allergen-food.page.html',
  styleUrls: [ './allergen-food.page.scss' ],
} )
export class AllergenFoodPage implements OnInit {

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
  }

}
