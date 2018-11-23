import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AllergenInterface } from "../../interfaces";

@Component({
  selector: 'app-allergens-details',
  templateUrl: './allergens-detail.page.html',
  styleUrls: ['./allergens-detail.page.scss'],
})
export class AllergensDetailPage implements OnInit {
  allergen: AllergenInterface;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.allergen = {
        imgSrc: null,
        name: this.route.snapshot.params['id']
    };
  }

}
