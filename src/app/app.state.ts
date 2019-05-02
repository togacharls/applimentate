import { Genre } from './bmi/enums/bmi.genre.enum';

export interface AppState {
  genre: Genre;
}

const INITIAL_STATE: AppState = {
  genre: Genre.WOMAN
};

export const getInitialState = (): AppState => ({...INITIAL_STATE});
