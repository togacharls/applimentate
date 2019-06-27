import { Genre } from './enums/bmi.genre.enum';
import { getInitialState } from '../app.state';
import * as BMI_ACTIONS from './bmi.actions';

const toggleGenreReducer = (action: BMI_ACTIONS.ToggleGenre): Genre => action.chosenGenre;
export const genre = (
  state: Genre = getInitialState().genre,
  action: BMI_ACTIONS.ToggleGenre | any
): Genre => {
  switch (action.type) {
    case BMI_ACTIONS.TYPES.TOGGLE_GENRE:
      return toggleGenreReducer(action);
    default:
      return state;
  }
};
