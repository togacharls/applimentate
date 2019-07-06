import { AllergenInterface } from './allergen.interface';

export interface AllergenDetailInterface extends AllergenInterface {
    images: string[];
    summary: string;
    food: string;
    health: string;
}
