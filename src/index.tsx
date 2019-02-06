import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore'

const initialState: any = {};
// const history = createHashHistory()
const store = configureStore(initialState)
const rootEl = document.getElementById('root')
const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  )

renderApp()
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp()
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
