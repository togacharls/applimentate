import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { AllergenFood, AllergenSummary, AllergenHealth, AllergensList } from '../interfaces/allergen.interface';

@Injectable( {
    providedIn: 'root'
} )
export class AllergensService {

    private allergenList: AllergensList[];
    public aName: string;
    private srcIcon = '../../../assets/icon/';
    private srcImg = '../../../assets/img/ImgAllergens/';

    private namesList = [
        'LUPINS', 'CELERY', 'PEANUTS', 'CRUSTACEANS', 'SULFUR_DIOXIDE_AND_SULPHITES', 'NUTS',
        'GLUTEN', 'SESAME_SEEDS', 'EGG', 'DAIRY_PRODUCTS', 'MOLLUSCS', 'MUSTARD', 'FISH', 'SOY'
    ];

    constructor ( private translateService: TranslateService ) {
        this.allergenList = this.getDefaultAllergenList();
        this.sortAllergenList();
    }

    getList(): AllergensList[] {
        return this.allergenList;
    }

    getAllergenNameFromParams( data ): string {
        // data = 'ALLERGENS.LUPINS'
        this.aName = data.slice( data.indexOf( '.' ) + 1 );
        // this.aName = 'LUPINS'
        return this.aName;
    }

    getAllergenSummary(): AllergenSummary {
        return {
            imgSummary01: this.srcImg + this.aName + '/' + this.aName + '_S01.png',
            imgSummary02: this.srcImg + this.aName + '/' + this.aName + '_S02.png',
            imgSummary03: this.srcImg + this.aName + '/' + this.aName + '_S03.png',
            summary: 'ALLERGENS.SUMMARY.' + this.aName
        };
    }

    getAllergenHealth(): AllergenHealth {
        return {
            imgHealth01: this.srcImg + this.aName + '/' + this.aName + '_H01.png',
            imgHealth02: this.srcImg + this.aName + '/' + this.aName + '_H02.png',
            imgHealth03: this.srcImg + this.aName + '/' + this.aName + '_H03.png',
            health: 'ALLERGENS.HEALTH.' + this.aName
        };
    }

    getAllergenFood(): AllergenFood {
        return {
            imgFood01: this.srcImg + this.aName + '/' + this.aName + '_F01.png',
            imgFood02: this.srcImg + this.aName + '/' + this.aName + '_F02.png',
            imgFood03: this.srcImg + this.aName + '/' + this.aName + '_F03.png',
            food: 'ALLERGENS.FOOD.' + this.aName
        };
    }

    private getDefaultAllergenList(): AllergensList[] {
        const allergenListStack = [];

        for ( const Name of this.namesList ) {
            allergenListStack.push( {
                name: 'ALLERGENS.' + Name,
                icon: this.srcIcon + Name.toLowerCase() + '.png'
            } );
        }
        return allergenListStack;
    }

    private sortAllergenList(): void {
        this.translateService
            .get( this.allergenList.map( aName => aName.name ) )
            .pipe( take( 1 ) )
            .subscribe( trasnlated => {
                this.allergenList.sort( ( elem1, elem2 ) =>
                    trasnlated[ elem1.name ] < trasnlated[ elem2.name ] ? -1 : trasnlated[ elem1.name ] > trasnlated[ elem2.name ] ? 1 : 0
                );
            } );
    }
}
