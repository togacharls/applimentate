import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';
import { IonTabButton } from '@ionic/angular';

@Component( {
  selector: 'app-allergens-details',
  templateUrl: './allergens-detail.page.html',
  styleUrls: [ './allergens-detail.page.scss' ],
} )
export class AllergensDetailPage implements OnInit {
  private allergenName: string;
  private numberBadgeSummary: number;
  private numberBadgeHealth: number;
  private numberBadgeFood: number;
  @ViewChild('summary') private tabSummary: IonTabButton;

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergenName = this.allergensService.getAllergenNameFromParams( this.route.snapshot.params.id );
    this.numberBadgeSummary = this.allergensService.srcImgNameSummary.length;
    this.numberBadgeHealth = this.allergensService.srcImgNameHealth.length;
    this.numberBadgeFood = this.allergensService.srcImgNameFood.length;

    // This is just for select by default the tab "Summary" when u enter to the view,
    // but the routing are setted with a wildcard in allergens.module.ts
    setTimeout(() => this.tabSummary.selected = true, 100);
  }

}
