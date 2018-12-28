import { AllergenInterface } from './allergen.interface';

export interface AllergenDetailInterface extends AllergenInterface {
    imgSummary: string;
    summary: string;
    food: string;
    health: string;
}
