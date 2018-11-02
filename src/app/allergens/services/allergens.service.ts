import { Injectable } from '@angular/core';
import { AllergenInterface } from '../interfaces';

@Injectable( {
  providedIn: 'root'
} )
export class AllergensService {

  private srcPath = '../../../assets/icon/';
  constructor () { }
  getList(): AllergenInterface[] {
    const allergenList = [
      { name: 'ALLERGENS.LUPINS', imgSrc: '' },
      { name: 'ALLERGENS.CELERY', imgSrc: '' },
      { name: 'ALLERGENS.PEANUTS', imgSrc: '' },
      { name: 'ALLERGENS.CRUSTACEANS', imgSrc: '' },
      { name: 'ALLERGENS.SULFUR_DIOXIDE_AND_SULPHITES', imgSrc: '' },
      { name: 'ALLERGENS.NUTS', imgSrc: '' },
      { name: 'ALLERGENS.GLUTEN', imgSrc: '' },
      { name: 'ALLERGENS.SESAME_SEEDS', imgSrc: '' },
      { name: 'ALLERGENS.EGG', imgSrc: '' },
      { name: 'ALLERGENS.DAIRY_PRODUCTS', imgSrc: '' },
      { name: 'ALLERGENS.MOLLUSCS', imgSrc: '' },
      { name: 'ALLERGENS.MUSTARD', imgSrc: '' },
      { name: 'ALLERGENS.FISH', imgSrc: '' },
      { name: 'ALLERGENS.SOY', imgSrc: '' }
    ];
    for ( const allergen of allergenList ) {
      allergen.imgSrc = this.getIconFilename( allergen.name.split('.')[1] );
    }
    return allergenList;
  }

  private getIconFilename( allergenName: string ): string {
    return this.srcPath + allergenName
      .toLowerCase()
      + '.png';
  }
}
