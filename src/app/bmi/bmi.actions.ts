import { Action } from '@ngrx/store';
import { Genre } from './enums/bmi.genre.enum';

export enum TYPES {
    TOGGLE_GENRE = '[GENRE] toggle genre'
}

export class ToggleGenre implements Action {
    readonly type = TYPES.TOGGLE_GENRE;

    constructor(public chosenGenre: Genre) {}
}
