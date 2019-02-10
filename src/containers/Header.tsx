import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  TextField,
  Select,
  FilledInput,
  MenuItem,
  Grid
} from '@material-ui/core'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ApplicationState } from '../store/reducers'
import { IPageState } from '../store/page/types'
import NewTask from '../components/NewTask'
import { createTask } from '../store/projects/actions'
import { toggleForm, setProjectId, setSearchTerm } from '../store/page/action'
import { IProject } from '../store/projects/types'

interface HeaderProps {
  projects: IProject[]
  onCreateTask: typeof createTask
  onToggleForm: typeof toggleForm
  onSetProjectId: typeof setProjectId
  onSetSearchChange: typeof setSearchTerm
}

const Header = ({
  searchTerm,
  currentProjectId,
  newTask,
  projects,
  onToggleForm,
  onCreateTask,
  onSetProjectId,
  onSetSearchChange
}: HeaderProps & IPageState) => {
  console.error('Header re-render')
  const onProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const projectId = e.currentTarget.getAttribute('data-value')
    if (projectId) {
      onSetProjectId(+projectId)
    }
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    onSetSearchChange(e.currentTarget.value)
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center" spacing={24}>
            <Grid item xs={6}>
              <Button onClick={onToggleForm} color="inherit">
                New task
              </Button>
            </Grid>
            <Grid item xs={3}>
              <TextField
                placeholder="Search"
                type="search"
                onChange={onSearch}
                value={searchTerm}
              />
            </Grid>
            <Grid item xs={3}>
              <Select
                fullWidth
                value={currentProjectId}
                onChange={onProjectChange}
                input={<FilledInput name="change-project" />}>
                {projects.map(project => (
                  <MenuItem key={project.id} value={project.id}>
                    {project.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <NewTask
        onCreateTask={onCreateTask}
        currentProjectId={currentProjectId}
        onClose={onToggleForm}
        open={newTask}
      />
    </React.Fragment>
  )
}

const mapStateToProps = ({ page, projects }: ApplicationState) => ({
  searchTerm: page.searchTerm,
  currentProjectId: page.currentProjectId,
  projects: projects.items,
  newTask: page.newTask
})

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onCreateTask: createTask,
      onToggleForm: toggleForm,
      onSetProjectId: setProjectId,
      onSetSearchChange: setSearchTerm
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
