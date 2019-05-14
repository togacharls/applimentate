import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergens-details',
  templateUrl: './allergens-detail.page.html',
  styleUrls: [ './allergens-detail.page.scss' ],
} )
export class AllergensDetailPage implements OnInit {
  allergenName: string;
  numberBadgeSummary: number;
  numberBadgeHealth: number;
  numberBadgeFood: number;
  @ViewChild('summary') inp;

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergenName = this.allergensService.getAllergenNameFromParams( this.route.snapshot.params.id );
    this.numberBadgeSummary = this.allergensService.srcImgNameSummary.length;
    this.numberBadgeHealth = this.allergensService.srcImgNameHealth.length;
    this.numberBadgeFood = this.allergensService.srcImgNameFood.length;
    setTimeout(() => {
      
    this.inp.selected = true;
    console.log(this.inp);
    }, 100);
  }
}
