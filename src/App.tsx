import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import TasksPage from './containers/TasksPage'
import Header from './containers/Header'

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Header />
        <TasksPage />
      </div>
    )
  }
}

export default App
