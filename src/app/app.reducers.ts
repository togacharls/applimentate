import { ActionReducerMap } from '@ngrx/store';
import { Genre } from './bmi/enums/bmi.genre.enum';
import * as BMI_REDUCERS from './bmi/bmi.reducers';

export interface AppState {
    genre: Genre;
}

export const appReducers: ActionReducerMap<AppState> = {
    genre: BMI_REDUCERS.genre
};
