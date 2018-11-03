import { Injectable } from '@angular/core';
import { AllergenInterface } from '../interfaces';

@Injectable( {
  providedIn: 'root'
} )
export class AllergensService {

  private srcPath = '../../../assets/icon/';
  private allergenStack = [];
<<<<<<< HEAD
=======
  private allergenForm = { name: '', imgSrc: '' };
>>>>>>> fb6793b93a3522f35d7c9d5c0fc66fb84d1a8eb5

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
<<<<<<< HEAD
    }

    for ( const allergen of this.allergenList ) {
      this.allergenStack.push( new AllergenObject( allergen, this.getIconFilename( allergen ) ) );
    }
=======
    }

    for ( const allergen of this.allergenList ) {
      this.allergenStack.push( new AllergenObject( allergen, this.getIconFilename( allergen ) ) );
    }
>>>>>>> fb6793b93a3522f35d7c9d5c0fc66fb84d1a8eb5
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
