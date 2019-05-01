import { Action } from '@ngrx/store';

export const TYPES = {
  initStore: '[APP] init store'
};

export class InitStore implements Action {
  readonly type = TYPES.initStore;
  constructor() {}
}
