export enum PageActions {
  SET_CURRENT_PROJECT_ID = 'SET_CURRENT_PROJECT_ID',
  FILTER_TASK = 'FILTER_TASK',
  TOGGLE_TASK_FORM = 'TOGGLE_TASK_FORM',
  SET_SEARCH_TERM = 'SET_SEARCH_TERM'
}


export interface IPageState {
  currentProjectId: number
  searchTerm: string
  newTask: boolean
}