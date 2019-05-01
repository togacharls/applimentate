import { Action } from '@ngrx/store';
import { Genre } from './enums/bmi.genre.enum';

export const TYPES = {
    toggleGenre: '[GENRE] toggle genre'
};

export class ToggleGenre implements Action {
    readonly type = TYPES.toggleGenre;

    constructor(public chosenGenre: Genre) {}
}
