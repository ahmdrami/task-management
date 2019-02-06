import { TaskActions, ITask } from './types'
import { CALL_API } from '../../middleware/api'

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

// export const fetchTasks = () => ({
//   [CALL_API]: {
//     types: [
//       TaskActions.FETCH_TASKS_STARTED,
//       TaskActions.FETCH_TASKS_SUCCEEDED,
//       TaskActions.FETCH_TASKS_FAILED
//     ],
//     endpoint: '/tasks',
//     method: 'get'
//   }
// })

export const fetchTasks = () => ({
  type: TaskActions.FETCH_TASKS_STARTED
})

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

export const filterTask = (searchTerm: string) => ({
  type: TaskActions.FILTER_TASKS,
  payload: searchTerm
})

export const getFilterTasks = (tasks: ITask[], searchTerm: string) => (
  tasks.filter(task =>
    task.title.match(new RegExp(searchTerm, 'i'))
  )
)