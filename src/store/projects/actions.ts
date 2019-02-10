import { TaskActions, ITask, IProject } from './types'
import { CALL_API } from '../../middleware/api'
import { ApplicationState } from '../reducers'
import { createSelector } from 'reselect'
import { getSearchTerm } from '../page/action'
// Api middleware example


export const createTask = (task: ITask) => {
  return {
    [CALL_API]: {
      types: [
        TaskActions.CREATE_TASK_STARTED,
        TaskActions.CREATE_TASK_SUCCEEDED,
        TaskActions.CREATE_TASK_FAILED
      ],
      endpoint: '/tasks',
      method: 'POST',
      body: task
      // meta: {
      //   analytics: {
      //     event: TaskActions.CREATE_TASK_SUCCEEDED,
      //     data: {
      //       id: task.id
      //     }
      //   }
      // }
    }
  }
}

export const fetchProjects = () => ({
  [CALL_API]: {
    types: [
      TaskActions.FETCH_PROJECTS_STARTED,
      TaskActions.FETCH_PROJECTS_SUCCEEDED,
      TaskActions.FETCH_PROJECTS_FAILED
    ],
    endpoint: '/projects?_embed=tasks',
    method: 'get'
  }
})

// export const fetchTasks = () => ({
//   type: TaskActions.FETCH_TASKS_STARTED
// })

export const editTask = (task: ITask, status: string) => ({
  [CALL_API]: {
    types: [
      TaskActions.EDIT_TASK_STARTED,
      TaskActions.EDIT_TASK_SUCCEEDED,
      TaskActions.EDIT_TASK_FAILED
    ],
    method: 'put',
    endpoint: `/tasks/${task.id}/`,
    body: { ...task, status }
  }
})

const progressTimerStart = (taskId: string) => ({
  type: TaskActions.TIMER_STARTED,
  payload: taskId
})

export const getTasksByProjectId = (store: ApplicationState) => {
  if (!store.page.currentProjectId) {
    return []
  }
  const currentProject: any = store.projects.items.find(
    project => project.id === store.page.currentProjectId
  )


  return currentProject.tasks
}

export const getFilterTasks = createSelector(
  [getTasksByProjectId, getSearchTerm],
  (tasks: ITask[], searchTerm: string) =>
    tasks.filter(task => task.title.match(new RegExp(searchTerm, 'i')))
)

