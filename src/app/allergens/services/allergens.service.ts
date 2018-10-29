import { Injectable } from '@angular/core';
import { AllergenInterface } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AllergensService {

  private srcPath = '../../../assets/icon/';
  constructor() { }
  getList(): AllergenInterface[] {
    return [
        { name: 'Altramuces', imgSrc: this.srcPath + 'altramuces.png' },
        { name: 'Apio', imgSrc: this.srcPath + 'apio.png' },
        { name: 'Cacahuetes', imgSrc: this.srcPath + 'cacahuetes.png' },
        { name: 'Crustáceos', imgSrc: this.srcPath + 'crustaceos.png' },
        { name: 'Dióxido de azufre y sulfitos', imgSrc: this.srcPath + 'sulfitos.png' },
        { name: 'Frutos secos', imgSrc: this.srcPath + 'frutossecos.png' },
        { name: 'Gluten', imgSrc: this.srcPath + 'gluten.png' },
        { name: 'Granos de sésamo', imgSrc: this.srcPath + 'sesamo.png' },
        { name: 'Huevo', imgSrc: this.srcPath + 'huevo.png' },
        { name: 'Lácteos', imgSrc: this.srcPath + 'lacteos.png' },
        { name: 'Moluscos', imgSrc: this.srcPath + 'moluscos.png' },
        { name: 'Mostaza', imgSrc: this.srcPath + 'mostaza.png' },
        { name: 'Pescado', imgSrc: this.srcPath + 'pescado.png' },
        { name: 'Soja', imgSrc: this.srcPath + 'soja.png' }
    ];
  }
}
