import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AllergenDetailInterface } from '../../interfaces/allergen.interface';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergens-details',
  templateUrl: './allergens-detail.page.html',
  styleUrls: [ './allergens-detail.page.scss' ],
} )
export class AllergensDetailPage implements OnInit {
  public data = 'Summary';
  allergen: AllergenDetailInterface;

  data3: any;

  chosed( event ): void {
    this.data = event.target.value;
  }

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenById( this.route.snapshot.params[ 'id' ] );
    this.data3 = document.querySelector( '#dataDetaultSelected' );
    this.data3.focus();
  }
}
