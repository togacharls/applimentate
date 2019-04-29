import { Genre } from './enums/bmi.genre.enum';
import { acciones } from './bmi.action';

export function bmiGenreReducer(state: Genre, action: acciones): Genre {
    // For return a new state and prevent the mutation of state.
    // The new state is a function constant
    const newState = (stat, actio) => state = action.chosenGenre;
    return newState(state, action);
}
