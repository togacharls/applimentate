import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';
import { AllergenSummary } from '../../interfaces';

@Component( {
  selector: 'app-allergen-summary',
  templateUrl: './allergen-summary.page.html',
  styleUrls: [ './allergen-summary.page.scss' ],
} )
export class AllergenSummaryPage implements OnInit {
  allergen: AllergenSummary;

  constructor (
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenSummary();
  }
}
