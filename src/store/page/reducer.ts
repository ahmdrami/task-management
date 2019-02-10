import { IPageState, PageActions } from './types'

const initialState: IPageState = {
  currentProjectId: 0,
  searchTerm: '',
  newTask: false
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PageActions.SET_CURRENT_PROJECT_ID:
      return {
        ...state,
        currentProjectId: action.payload
      }
    case PageActions.SET_SEARCH_TERM:
    return {
      ...state,
      searchTerm: action.payload
    }
    case PageActions.FILTER_TASK:
      return {
        ...state,
        searchTerm: action.payload
      }
    case PageActions.TOGGLE_TASK_FORM:
    return {
      ...state,
      newTask: !state.newTask
    }
    default:
      return state
  }
}

export { reducer as pageReducer }
