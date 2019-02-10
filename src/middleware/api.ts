import { Middleware } from 'redux'
import { END_POINTS, client } from '../api'
export const CALL_API = 'CALL_API'

interface ICallApi {
  types: string[]
  endpoint: string
  method: string
  body: object
}
const apiMiddleware: Middleware = store => next => action => {
  const callApi: ICallApi = action[CALL_API]

  if (typeof callApi === 'undefined') {
    return next(action)
  }

  const { method, endpoint, body, types } = callApi
  const [requestStartedType, successType, failureType] = types
  next({ type: requestStartedType })

  return makeCall({ method, endpoint, body, types }).then(
    resp =>
      next({
        type: successType,
        payload: resp.data
      }),
    err =>
      next({
        type: failureType,
        err: err.message
      })
  )
}

const makeCall = ({ method, endpoint, body }: ICallApi) => {
  const params = {
    method,
    url: `${END_POINTS.BASE_URL}${endpoint}`,
    data: body
  }
  return client(params)
    .then(resp => {
      return resp
    })
    .catch(err => {
      return err
    })
}
export default apiMiddleware
