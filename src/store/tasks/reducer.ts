import { TaskState, ITask, TaskActions } from './types'

const initialState: TaskState = {
  tasks: [],
  fetching: false,
  searchTerm: ''
}

const reducer = (state: TaskState = initialState, { type, payload }: any) => {
  switch (type) {
    case TaskActions.CREATE_TASK_STARTED:
    case TaskActions.FETCH_TASKS_STARTED:
    case TaskActions.EDIT_TASK_STARTED:
      return {
        ...state,
        fetching: true
      }
    case TaskActions.CREATE_TASK_SUCCEEDED:
      return {
        ...state,
        tasks: [...state.tasks, payload]
      }
    case TaskActions.CREATE_TASK_FAILED:
    case TaskActions.FETCH_TASKS_FAILED:
    case TaskActions.EDIT_TASK_FAILED:
      return {
        ...state,
        fetching: false,
        error: payload
      }

    case TaskActions.FETCH_TASKS_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        tasks: payload
      }

    case TaskActions.EDIT_TASK_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            return { ...task, ...payload }
          }
          return task
        })
      }
    case TaskActions.FILTER_TASKS: 
    return {
      ...state,
      searchTerm: payload
    }
    default:
      return state
  }
}

export { reducer as taskReducer }
