import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';
import { AllergenHealth } from '../../interfaces';

@Component( {
  selector: 'app-allergen-health',
  templateUrl: './allergen-health.page.html',
  styleUrls: [ './allergen-health.page.scss' ],
} )
export class AllergenHealthPage implements OnInit {
  allergen: AllergenHealth;

  constructor (
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenHealth();
  }
}
