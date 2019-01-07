import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';
import { AllergenFood } from '../../interfaces';

@Component( {
  selector: 'app-allergen-food',
  templateUrl: './allergen-food.page.html',
  styleUrls: [ './allergen-food.page.scss' ],
} )
export class AllergenFoodPage implements OnInit {
  allergen: AllergenFood;

  constructor (
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenFood();
  }
}
