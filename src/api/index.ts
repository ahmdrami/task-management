import axios from 'axios'
import { ITask } from '../store/tasks/types';

export enum END_POINTS {
  BASE_URL = 'http://localhost:3000'
}

export const client = axios.create({
  baseURL: END_POINTS.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const fetchTasks = () => client.get('/tasks')
export const changeStatus = (id: number, data: ITask) => client.put(`/tasks/${id}`, data)