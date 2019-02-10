import * as React from 'react'
import TaskProps from './Task'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Task from './Task'
import { ITask } from '../store/projects/types';

interface TaskListProps {
  status: string
  tasks: ITask[]
  
  handleChangeStatus: any
}

const TaskList: React.SFC<TaskListProps> = ({
  status,
  tasks,
  handleChangeStatus
}) => (
  <Grid item xs={4} container direction="column" spacing={8}>
    <Grid item>
      <Typography variant="h6"> {status} </Typography>
    </Grid>
    {tasks.map(task => (
      <Task handleChangeStatus={handleChangeStatus} key={task.id} {...task} />
    ))}
  </Grid>
)

export default TaskList
