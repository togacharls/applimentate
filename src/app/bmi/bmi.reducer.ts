import { Genre } from './enums/bmi.genre.enum';
import { acciones } from './bmi.action';

export function bmiGenreReducer(state: Genre, action: acciones): Genre {

    return action.chosenGenre;
}
