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
  allergen: AllergenDetailInterface;

  Detail = 'Summary';

  DetailSelected( event ) {
    this.Detail = event.target.attributes.value.value;
  }

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }


  ngOnInit() {
    this.allergen = this.allergensService.getAllergenById( this.route.snapshot.params[ 'id' ] );
  }
}
