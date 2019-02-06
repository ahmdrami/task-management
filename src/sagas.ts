import { call, fork, takeLatest, put } from 'redux-saga/effects'
import { TaskActions, ITask } from './store/tasks/types'
import * as api from './api'

export default function* rootSaga() {
  yield takeLatest(TaskActions.FETCH_TASKS_STARTED, watchFetchTasks)
  // yield takeLatest(TaskActions.CHANGE_STATUS_STARTED, watchChangeStatus() )
}

function* watchFetchTasks() {
  try {
    const { data } = yield call(api.fetchTasks)
    yield put({
      type: TaskActions.FETCH_TASKS_SUCCEEDED,
      payload: data
    })
  } catch (e) {
    yield put({
      type: TaskActions.FETCH_TASKS_FAILED,
      payload: e.message
    })
  }
}

// function* watchChangeStatus(id: number, body: ITask) {
//   try {
//     const { data } = yield put(api.changeStatus(id, body))
//   }
// }
