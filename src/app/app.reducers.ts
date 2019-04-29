import { Genre } from './bmi/enums/bmi.genre.enum';
import { ActionReducerMap } from '@ngrx/store';
import { bmiGenreReducer } from './bmi/bmi.reducer';

export interface AppState {
    genre: Genre;
}

export const appReducers: ActionReducerMap<AppState> = {
    genre: bmiGenreReducer
};
