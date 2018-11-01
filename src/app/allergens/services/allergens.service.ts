import { Injectable } from '@angular/core';
import { AllergenInterface } from '../interfaces';

@Injectable( {
  providedIn: 'root'
} )
export class AllergensService {

  private srcPath = '../../../assets/icon/';
  private allergenStack = [];
  private allergenForm = { name: '', imgSrc: '' };

  allergenList = [
    'Altramuces',
    'Apio',
    'Cacahuetes',
    'Crustáceos',
    'Dióxido de azufre y sulfitos',
    'Frutos secos',
    'Gluten',
    'Granos de sésamo',
    'Huevo',
    'Lácteos',
    'Moluscos',
    'Mostaza',
    'Pescado',
    'Soja'
  ];

  getList(): AllergenInterface[] {

    class AllergenObject {
      constructor (
        private name: string,
        private imgSrc: string,
        private path: string = name
      ) { }
    }

    for ( const allergen of this.allergenList ) {
      this.allergenStack.push( new AllergenObject( allergen, this.getIconFilename( allergen ) ) );
    }
    return this.allergenStack;
  }

  private getIconFilename( allergenName: string ): string {
    return this.srcPath + allergenName
      .toLowerCase()
      .normalize( 'NFD' )
      .replace( /[\u0300-\u036f]/g, '' )
      .split( ' ' )
      .join( '_' )
      + '.png';
  }

}
