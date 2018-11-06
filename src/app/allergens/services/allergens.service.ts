import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { AllergenInterface } from '../interfaces';

@Injectable( {
  providedIn: 'root'
} )
export class AllergensService {

  private allergenList: AllergenInterface[];
  private srcPath = '../../../assets/icon/';
  constructor (private translateService: TranslateService) {
    this.allergenList = this.getDefaultAllergenList();
    this.sortAllergenList();
  }

  getList(): AllergenInterface[] {
    return this.allergenList;
  }

  private getDefaultAllergenList(): AllergenInterface[] {
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

  private sortAllergenList(): void {
      this.translateService
          .get(this.allergenList.map(item => item.name))
          .pipe(take(1))
          .subscribe(trasnlated => {
              this.allergenList.sort((elem1, elem2) =>
                  trasnlated[elem1.name] < trasnlated[elem2.name] ? -1 : trasnlated[elem1.name] > trasnlated[elem2.name]? 1 : 0
              )
          });
  }

  private getIconFilename( allergenName: string ): string {
    return this.srcPath + allergenName
      .toLowerCase()
      + '.png';
  }
}
