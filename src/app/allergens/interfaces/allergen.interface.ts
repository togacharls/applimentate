export interface AllergenInterface {
    name: string;
    icon: string;
}

export interface AllergenDetailInterface extends AllergenInterface {
    imgSummary01: string;
    imgSummary02: string;
    imgSummary03: string;
    summary: string;
    food: string;
    health: string;
}
