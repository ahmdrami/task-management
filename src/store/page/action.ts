import { ApplicationState } from '../reducers'
import { PageActions } from './types'
import { createSelector } from 'reselect';
import { IProjectState, IProject } from '../projects/types';

export const getSearchTerm = (state: ApplicationState) => state.page.searchTerm
export const setSearchTerm = (searchTerm: string ) => ({
  type: PageActions.SET_SEARCH_TERM,
  payload: searchTerm
})
export const toggleForm = () => ({
  type: PageActions.TOGGLE_TASK_FORM
})

export const setProjectId = (projectId: number) => ({
  type: PageActions.SET_CURRENT_PROJECT_ID,
  payload: projectId
})

// export const getProjects = createSelector([
//   (store: IProject[]) => ], projects => Object.keys(projects.items).map((id: any) => projects.items[id])) 