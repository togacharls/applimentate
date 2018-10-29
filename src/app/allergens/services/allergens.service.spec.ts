import { TestBed } from '@angular/core/testing';

import { AllergensService } from './allergens.service';

describe( 'AllergensService', () => {
    beforeEach( () => TestBed.configureTestingModule( {} ) );

    it( 'should be created', () => {
        const service: AllergensService = TestBed.get( AllergensService );
        expect( service ).toBeTruthy();
    } );
    it( 'should return a fourteen elements list', () => {
        const service: AllergensService = TestBed.get( AllergensService ),
            allergensList = service.getList();
        expect( allergensList.length ).toBe( 14 );
    } );
    it( 'should return the correct path and filename of each allergen icon', () => {
        const service: AllergensService = TestBed.get( AllergensService );
        const allergensName: string[] = [ 'altramuces', 'apio', 'cacahuetes', 'crustaceos', 'dioxido_de_azufre_y_sulfitos', 'frutos_secos',
            'gluten', 'granos_de_sesamo', 'huevo', 'lacteos', 'moluscos', 'mostaza', 'pescado', 'soja' ],
            allergensList = service.getList(),

            filterFunction = ( allergenItem, expectedFilename ) => allergenItem.imgSrc === `../../../assets/icon/${ expectedFilename }.png`;
        for ( const allergen of allergensName ) {
            expect( allergensList.filter( item => filterFunction( item, allergen ) ).length ).toBe( 1 );
        }
    } );
} );
