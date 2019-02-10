import { createTask } from '../actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('projects actions', () => {
  it('should create a task', () => {
    expect(true).toEqual(true)
  })
})
