import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import TasksPage from './components/TasksPage'

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <TasksPage />
      </div>
    )
  }
}

export default App
