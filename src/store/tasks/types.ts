export enum TaskActions {
  CREATE_TASK_STARTED = 'CREATE_TASK_STARTED',
  CREATE_TASK_SUCCEEDED = 'CREATE_TASK_SUCCEEDED',
  CREATE_TASK_FAILED = 'CREATE_TASK_FAILED',
  FETCH_TASKS_STARTED = 'FETCH_TASKS_STARTED',
  FETCH_TASKS_SUCCEEDED = 'FETCH_TASKS_SUCCEEDED',
  FETCH_TASKS_FAILED = 'FETCH_TASKS_FAILED',
  EDIT_TASK_STARTED = 'EDIT_TASK_STARTED',
  EDIT_TASK_SUCCEEDED = 'EDIT_TASK_SUCCEEDED',
  EDIT_TASK_FAILED = 'EDIT_TASK_FAILED',
  TIMER_STARTED = 'TIMER_STARTED',
  FILTER_TASKS = 'FILTER_TASK'
}
export interface TaskState {
  tasks: ITask[]
  fetching: boolean
  searchTerm: string
}

export interface ITask {
  id?: number
  title: string
  description: string
  status: string,
  timer?: number
}

export const TASK_STATUS = {
  NOT_STARTED : 'Not Started',
  IN_PROGRESS : 'In Progress',
  COMPLETED : 'Completed'
}
