export enum TaskActions {
  FETCH_PROJECTS_STARTED = 'FETCH_PROJECTS_STARTED',
  FETCH_PROJECTS_SUCCEEDED = 'FETCH_PROJECTS_SUCCEEDED',
  FETCH_PROJECTS_FAILED = 'FETCH_PROJECTS_FAILED',
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

export const TASK_STATUS = {
  NOT_STARTED: 'Not started',
  IN_PROGRESS: 'In progress',
  COMPLETED: 'Completed'
}

export interface IProjectState {
  items: IProject[]
  fetching: boolean
}

export interface IProject {
  id: number
  name: string
  tasks: ITask[]
}
export interface ITask {
  id?: number
  title: string
  description: string
  status: string
  timer?: number
  projectId: number
}
