export interface AllergenInterface {
    name: string;
    icon: string;
}

export interface AllergenDetailInterface extends AllergenInterface {
    imgSummary01: string;
    imgSummary02: string;
    imgSummary03: string;
    imgHealth01: string;
    imgHealth02: string;
    imgHealth03: string;
    imgFood01: string;
    imgFood02: string;
    imgFood03: string;
    summary: string;
    food: string;
    health: string;
}
