import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AllergenInterface } from "../../interfaces";
import { AllergensService } from "../../services";

@Component({
  selector: 'app-allergens-details',
  templateUrl: './allergens-detail.page.html',
  styleUrls: ['./allergens-detail.page.scss'],
})
export class AllergensDetailPage implements OnInit {
  allergen: AllergenInterface;
  constructor(
      private route: ActivatedRoute,
      private allergensService: AllergensService
  ) { }

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenById(this.route.snapshot.params['id']);
  }
}
