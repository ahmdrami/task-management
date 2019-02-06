import { TaskState } from './tasks/types'
import { taskReducer } from './tasks/reducer'
import { combineReducers, Dispatch, Action, AnyAction } from 'redux'

export interface ApplicationState {
  tasks: TaskState
}
export const rootReducer = combineReducers<ApplicationState>({
  tasks: taskReducer
})


