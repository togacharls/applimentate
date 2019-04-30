import { Action } from '@ngrx/store';
import { Genre } from './enums/bmi.genre.enum';

const BMI_ACTION_TYPES = {
    toggleGenre: '[GENRE] toggle genre'
};

export class ToggleGenre implements Action {
    readonly type = BMI_ACTION_TYPES.toggleGenre;

    constructor(public chosenGenre: Genre) {}
}
