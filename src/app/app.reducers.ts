import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import * as BMI_REDUCERS from './bmi/bmi.reducers';

export const appReducers: ActionReducerMap<AppState> = {
    genre: BMI_REDUCERS.genre
};
