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

    getAllergenById( id: string ): AllergenDetailInterface {
        const allergenName = id.slice( id.lastIndexOf( '.' ) + 1 );
        return {
            name: 'ALLERGENS.' + allergenName,
            icon: this.srcImgIconPath + allergenName.toLowerCase() + '.png',
            imgSummary01: this.srcImgSummaryPath + allergenName + '01.png',
            imgSummary02: this.srcImgSummaryPath + allergenName + '02.png',
            imgSummary03: this.srcImgSummaryPath + allergenName + '03.png',
            summary: 'ALLERGENS.SUMMARIES.' + allergenName,
            food: 'ALLERGENS.FOODS.' + allergenName,
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
            .subscribe( trasnlated => {
                this.allergenList.sort( ( elem1, elem2 ) =>
                    trasnlated[ elem1.name ] < trasnlated[ elem2.name ] ? -1 : trasnlated[ elem1.name ] > trasnlated[ elem2.name ] ? 1 : 0
                );
            } );
    }
}
