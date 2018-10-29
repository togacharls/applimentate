import { Injectable } from '@angular/core';
import { AllergenInterface } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AllergensService {

  private srcPath = '../../../assets/icon/';
  constructor() { }
  getList(): AllergenInterface[] {
    const allergenList = [
        { name: 'Altramuces', imgSrc: '' },
        { name: 'Apio', imgSrc: '' },
        { name: 'Cacahuetes', imgSrc: '' },
        { name: 'Crustáceos', imgSrc: '' },
        { name: 'Dióxido de azufre y sulfitos', imgSrc: '' },
        { name: 'Frutos secos', imgSrc: '' },
        { name: 'Gluten', imgSrc: this.srcPath + 'gluten.png' },
        { name: 'Granos de sésamo', imgSrc: '' },
        { name: 'Huevo', imgSrc: '' },
        { name: 'Lácteos', imgSrc: '' },
        { name: 'Moluscos', imgSrc: '' },
        { name: 'Mostaza', imgSrc: '' },
        { name: 'Pescado', imgSrc: '' },
        { name: 'Soja', imgSrc: '' }
    ];
    for (const allergen of allergenList) {
        allergen.imgSrc = this.getIconFilename(allergen.name);
    }
    return allergenList;
  }

  private getIconFilename(allergenName: string): string {
      return this.srcPath + allergenName
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .split(' ')
          .join('_')
          + '.png';
  }
}
