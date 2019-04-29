import { Action } from '@ngrx/store';
import { Genre } from './enums/bmi.genre.enum';

export const TOGGLE_GENRE = '[GENRE] toggle genre';

export class ToggleGenre implements Action {
    readonly type = TOGGLE_GENRE;

    constructor(public chosenGenre: Genre) {}
}

export type acciones = ToggleGenre;
