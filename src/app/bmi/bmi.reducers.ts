import { Genre } from './enums/bmi.genre.enum';
import * as BMI_ACTIONS from './bmi.actions';

export function genre(state: Genre, action: BMI_ACTIONS.ToggleGenre): Genre {

    return action.chosenGenre;
}
