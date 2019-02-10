import * as React from 'react'
import { connect } from 'react-redux'
import TaskList from '../components/TaskList'
import Grid from '@material-ui/core/Grid'
import { ApplicationState } from '../store/reducers'
import { TASK_STATUS, IProjectState, ITask } from '../store/projects/types'
import {
  createTask,
  editTask,
  fetchProjects,
  getFilterTasks,
  // getGroupedAndFilteredTasks
} from '../store/projects/actions'
import { bindActionCreators } from 'redux'

interface TaskPageProps {
  tasks: ITask[]
  // createTask: typeof createTask
  fetchProjects: typeof fetchProjects
  editTask: typeof editTask
}

class TasksPage extends React.Component<TaskPageProps> {
  componentDidMount() {
    this.props.fetchProjects()
  }

  handleTaskStatus = (e: any) => {
    this.setState({ status: e.target.value })
  }

  handleTaskStatusChange = (task: ITask, status: string) => {
    this.props.editTask(task, status)
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
    console.error('Render tasks page')
    return (
      <React.Fragment>
        <Grid container>{this.renderTaskLists()}</Grid>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (store: ApplicationState) => {
  const { fetching } = store.projects
  return {
    tasks: getFilterTasks(store),
    fetching,
  }
}

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchProjects,
      editTask,
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage)
