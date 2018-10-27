import { Component, OnInit } from '@angular/core';
import { AllergenInterface } from './interfaces';
import { NgStyle } from '@angular/common';

@Component( {
    selector: 'app-allergens',
    templateUrl: 'allergens.page.html',
    styleUrls: [ 'allergens.page.scss' ]
} )
export class AllergensPage implements OnInit {
    allergens: AllergenInterface[];
    constructor () { }
    ngOnInit(): void {
        this.allergens = [
            { name: 'Altramuces', imgSrc: '../../assets/icon/altramuces.png' },
            { name: 'Apio', imgSrc: '../../assets/icon/apio.png' },
            { name: 'Cacahuetes', imgSrc: '../../assets/icon/cacahuetes.png' },
            { name: 'Crustáceos', imgSrc: '../../assets/icon/crustaceos.png' },
            { name: 'Dióxido de azufre y sulfitos', imgSrc: '../../assets/icon/sulfitos.png' },
            { name: 'Frutos secos', imgSrc: '../../assets/icon/frutossecos.png' },
            { name: 'Gluten', imgSrc: '../../assets/icon/gluten.png' },
            { name: 'Granos de sésamo', imgSrc: '../../assets/icon/sesamo.png' },
            { name: 'Huevo', imgSrc: '../../assets/icon/huevo.png' },
            { name: 'Lácteos', imgSrc: '../../assets/icon/lacteos.png' },
            { name: 'Moluscos', imgSrc: '../../assets/icon/moluscos.png' },
            { name: 'Mostaza', imgSrc: '../../assets/icon/mostaza.png' },
            { name: 'Pescado', imgSrc: '../../assets/icon/pescado.png' },
            { name: 'Soja', imgSrc: '../../assets/icon/soja.png' }
        ];
    }
}
