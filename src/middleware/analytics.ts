import { Middleware } from 'redux'

const analytics: Middleware = store => next => action => {
  if (!action || !action.meta || !action.meta.analytics) {
    return next(action)
  }

  const { event, data } = action.meta.analytics

  fakeApiCall(event, data)
    .then(() => console.log('Recored: ', event, data))
    .catch(err =>
      console.error(
        'An error occured while sending analytics: ',
        err.toString()
      )
    )
}

const fakeApiCall = (eventName: string, data: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('success')
  })
}

export default analytics
