import * as React from 'react'
import { connect } from 'react-redux'
import TaskList from './TaskList'
import Grid from '@material-ui/core/Grid'
import { ApplicationState } from '../store/reducers'
import { ITask, TASK_STATUS, TaskState } from '../store/tasks/types'
import {
  fetchTasks,
  createTask,
  editTask,
  filterTask,
  getFilterTasks
} from '../store/tasks/actions'
import { AppBar, Toolbar, Button, TextField } from '@material-ui/core'

interface DispatchProps {
  createTask: typeof createTask
  fetchTasks: typeof fetchTasks
  editTask: typeof editTask
  filterTask: typeof filterTask
}

class TasksPage extends React.Component<DispatchProps & TaskState, any> {
  state = {
    showNewCardForm: false,
    title: '',
    description: '',
    status: 'Not Started'
  }

  componentDidMount() {
    this.props.fetchTasks()
  }
  handleChange = ({
    currentTarget: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: value })
  }

  handleTaskStatus = (e: any) => {
    this.setState({ status: e.target.value })
  }

  handleResetForm = () =>
    this.setState({ showNewCardForm: false, title: '', description: '' })

  handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { title, description } = this.state
    this.props.createTask({
      status: 'Not Started',
      title,
      description
      // timer
    })
  }

  handleTaskStatusChange = (task: ITask, status: string) => {
    this.props.editTask(task, status)
  }
  handleToggleForm = () =>
    this.setState({ showNewCardForm: !this.state.showNewCardForm })

  handleSearch = (e: any) => {
    this.props.filterTask(e.currentTarget.value)
  }
  renderTaskLists = () => {
    const { tasks } = this.props
    return Object.values(TASK_STATUS).map(status => {
      const statusTasks = tasks.filter(task => task.status === status)
      return (
        <TaskList
          handleChangeStatus={this.handleTaskStatusChange}
          key={status}
          status={status}
          tasks={statusTasks}
        />
      )
    })
  }
  public render() {
    const { showNewCardForm, title, description } = this.state
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={this.handleToggleForm} color="inherit">
              New task
            </Button>
            <TextField
              placeholder="Search"
              type="search"
              onChange={this.handleSearch}
              value={this.props.searchTerm}
            />
          </Toolbar>
        </AppBar>

        <Grid container direction="column">
          {showNewCardForm && (
            <form onSubmit={this.handleCreateTask}>
              <Grid container>
                <Grid item>
                  <TextField
                    variant="outlined"
                    label="title"
                    onChange={this.handleChange}
                    name="title"
                    value={title}
                    fullWidth
                  />
                  <TextField
                    variant="outlined"
                    label="description"
                    onChange={this.handleChange}
                    name="description"
                    fullWidth
                    value={description}
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="secondary">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
          <Grid container>{this.renderTaskLists()}</Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (store: ApplicationState) => {
  const { searchTerm, fetching } = store.tasks
  return {
    tasks: getFilterTasks(store.tasks.tasks, searchTerm),
    searchTerm,
    fetching
  }
}

export default connect(
  mapStateToProps,
  {
    createTask,
    fetchTasks,
    editTask,
    filterTask
  }
)(TasksPage)
