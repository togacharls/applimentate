export interface AllergenInterface {
    name: string;
    icon: string;
}

export interface AllergenDetailInterface extends AllergenInterface {
    imgSummary: string;
    summary: string;
    food: string;
    health: string;
}

