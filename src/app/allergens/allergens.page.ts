import { Component, OnInit } from '@angular/core';
import { AllergenInterface } from './interfaces';

@Component({
    selector: 'app-allergens',
    templateUrl: 'allergens.page.html',
    styleUrls: ['allergens.page.scss']
})
export class AllergensPage implements OnInit {
    allergens: AllergenInterface[];
    constructor() {}
    ngOnInit(): void {
        this.allergens = [
            { name: 'Altramuces'},
            { name: 'Apio'},
            { name: 'Cacahuetes'},
            { name: 'Crustáceos'},
            { name: 'Dióxido de azufre y sulfitos'},
            { name: 'Frutos secos'},
            { name: 'Gluten'},
            { name: 'Granos de sésamo'},
            { name: 'Huevo'},
            { name: 'Lácteos'},
            { name: 'Moluscos'},
            { name: 'Mostaza'},
            { name: 'Pescado'},
            { name: 'Soja'}
        ];
    }
}
