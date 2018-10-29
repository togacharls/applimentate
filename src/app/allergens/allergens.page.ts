import { Component, OnInit } from '@angular/core';
import { AllergenInterface } from './interfaces';

@Component( {
    selector: 'app-allergens',
    templateUrl: 'allergens.page.html',
    styleUrls: [ 'allergens.page.scss' ]
} )
export class AllergensPage implements OnInit {
    allergens: AllergenInterface[];
    src = '../../assets/icon/';
    constructor () { }
    ngOnInit(): void {
        this.allergens = [
            { name: 'Altramuces', imgSrc: this.src + 'altramuces.png' },
            { name: 'Apio', imgSrc: this.src + 'apio.png' },
            { name: 'Cacahuetes', imgSrc: this.src + 'cacahuetes.png' },
            { name: 'Crustáceos', imgSrc: this.src + 'crustaceos.png' },
            { name: 'Dióxido de azufre y sulfitos', imgSrc: this.src + 'sulfitos.png' },
            { name: 'Frutos secos', imgSrc: this.src + 'frutossecos.png' },
            { name: 'Gluten', imgSrc: this.src + 'gluten.png' },
            { name: 'Granos de sésamo', imgSrc: this.src + 'sesamo.png' },
            { name: 'Huevo', imgSrc: this.src + 'huevo.png' },
            { name: 'Lácteos', imgSrc: this.src + 'lacteos.png' },
            { name: 'Moluscos', imgSrc: this.src + 'moluscos.png' },
            { name: 'Mostaza', imgSrc: this.src + 'mostaza.png' },
            { name: 'Pescado', imgSrc: this.src + 'pescado.png' },
            { name: 'Soja', imgSrc: this.src + 'soja.png' }
        ];
    }
}
