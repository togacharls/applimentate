import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { AllergenDetailInterface, AllergenInterface } from '../interfaces';

@Injectable( {
    providedIn: 'root'
} )
export class AllergensService {

    private allergenList: AllergenInterface[];
    private srcImgIconPath = '../../../assets/icon/';
    private srcImgSummaryPath = '../../../assets/img/ImgAllergens/';
    private namesList = [ 'LUPINS', 'CELERY', 'PEANUTS', 'CRUSTACEANS', 'SULFUR_DIOXIDE_AND_SULPHITES', 'NUTS', 'GLUTEN',
        'SESAME_SEEDS', 'EGG', 'DAIRY_PRODUCTS', 'MOLLUSCS', 'MUSTARD', 'FISH', 'SOY' ];

    constructor ( private translateService: TranslateService ) {
        this.allergenList = this.getDefaultAllergenList();
        this.sortAllergenList();
    }

    getList(): AllergenInterface[] {
        return this.allergenList;
    }

    // This function return just the name of the allergen:
    // http://localhost:8100/allergens/ALLERGENS.LUPINS      return  'LUPINS'
    // http://localhost:8100/allergens/ALLERGENS.LUPINS/foo  return  'LUPINS'
    getAllergenNameFromPath( url ): string {
        const allergenPos = url.indexOf( 'ALLERGENS' );
        const idxNextSlash = url.indexOf( '/', allergenPos );
        const slash = idxNextSlash === -1 ? undefined : idxNextSlash;
        return url.slice( url.indexOf( '.' ) + 1, slash );
    }

    getAllergenById( id: string ): AllergenDetailInterface {
        const allergenName = this.getAllergenNameFromPath( id );
        console.log( allergenName );
        return {
            name: 'ALLERGENS.' + allergenName,
            icon: this.srcImgIconPath + allergenName.toLowerCase() + '.png',
            imgSummary01: this.srcImgSummaryPath + allergenName + '/' + allergenName + '_S01.png',
            imgSummary02: this.srcImgSummaryPath + allergenName + '/' + allergenName + '_S02.png',
            imgSummary03: this.srcImgSummaryPath + allergenName + '/' + allergenName + '_S03.png',
            imgHealth01: this.srcImgSummaryPath + allergenName + '/' + allergenName + '_H01.png',
            imgHealth02: this.srcImgSummaryPath + allergenName + '/' + allergenName + '_H02.png',
            imgHealth03: this.srcImgSummaryPath + allergenName + '/' + allergenName + '_H03.png',
            imgFood01: this.srcImgSummaryPath + allergenName + '/' + allergenName + '_F01.png',
            imgFood02: this.srcImgSummaryPath + allergenName + '/' + allergenName + '_F02.png',
            imgFood03: this.srcImgSummaryPath + allergenName + '/' + allergenName + '_F03.png',
            summary: 'ALLERGENS.SUMMARY.' + allergenName,
            food: 'ALLERGENS.FOOD.' + allergenName,
            health: 'ALLERGENS.HEALTH.' + allergenName
        };
    }

    private getDefaultAllergenList(): AllergenInterface[] {
        const allergenNameIcon = [];
        class AllergenId {
            constructor (
                public name: string,
                public icon: string
            ) { }
        }
        for ( const allergen of this.namesList ) {
            allergenNameIcon.push( new AllergenId( 'ALLERGENS.' + allergen,
                this.srcImgIconPath + allergen.toLowerCase() + '.png' ) );
        }
        return allergenNameIcon;
    }

    private sortAllergenList(): void {
        this.translateService
            .get( this.allergenList.map( allergenName => allergenName.name ) )
            .pipe( take( 1 ) )
            .subscribe( translated => {
                this.allergenList.sort( ( elem1, elem2 ) =>
                    translated[ elem1.name ] < translated[ elem2.name ] ? -1 : translated[ elem1.name ] > translated[ elem2.name ] ? 1 : 0
                );
            } );
    }
}
