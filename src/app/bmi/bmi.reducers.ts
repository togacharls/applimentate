import { Genre } from './enums/bmi.genre.enum';
import { getInitialState } from '../app.state';
import * as BMI_ACTIONS from './bmi.actions';
import * as APP_ACTIONS from '../app.actions';

const toggleGenreReducer = (action: BMI_ACTIONS.ToggleGenre): Genre => action.chosenGenre;

export function genre(
  state: Genre,
  action: BMI_ACTIONS.ToggleGenre | any
): Genre {
  switch (action.type) {
    case BMI_ACTIONS.TYPES.TOGGLE_GENRE:
      return toggleGenreReducer(action);
    case APP_ACTIONS.TYPES.NGRX_STORE_INIT:
      return getInitialState().genre;
    default:
      throw new Error(`Non registered action: ${action.type}`);
  }
}
