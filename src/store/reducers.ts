import { projectReducer } from './projects/reducer'
import { combineReducers } from 'redux'
import { IProjectState } from './projects/types';
import { pageReducer } from './page/reducer';
import { IPageState } from './page/types';

export interface ApplicationState {
  page: IPageState,
  projects: IProjectState
}
export const rootReducer = combineReducers<ApplicationState>({
  page: pageReducer,
  projects: projectReducer
})


