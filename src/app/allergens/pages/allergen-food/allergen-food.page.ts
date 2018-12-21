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

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenById( this.route.snapshot.params[ 'id' ] );
  }

}
