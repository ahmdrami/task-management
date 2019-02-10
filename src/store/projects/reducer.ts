import { IProjectState, ITask, TaskActions } from './types'

const initialState: IProjectState = {
  items: [],
  fetching: false,
}

const reducer = (state: IProjectState = initialState, { type, payload }: any) => {
  switch (type) {
    case TaskActions.CREATE_TASK_STARTED:
    case TaskActions.FETCH_TASKS_STARTED:
    case TaskActions.FETCH_PROJECTS_STARTED:
    case TaskActions.EDIT_TASK_STARTED:
      return {
        ...state,
        fetching: true
      }
    case TaskActions.CREATE_TASK_SUCCEEDED:
      return {
        ...state,
        // tasks: [...state.tasks, payload]
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
    case TaskActions.FETCH_PROJECTS_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        items: payload
      }

    case TaskActions.EDIT_TASK_SUCCEEDED:
    // const projectIndex = state.items.findIndex(project => project.id === payload.projectId)
    // console.log(projectIndex, 'task status changed')
    // state.items[projectIndex].tasks.
      return {
        ...state,
        // fetching: false,
        // tasks: state.tasks.map(task => {
        //   if (task.id === payload.id) {
        //     return { ...task, ...payload }
        //   }
        //   return task
        // })
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

export { reducer as projectReducer }
