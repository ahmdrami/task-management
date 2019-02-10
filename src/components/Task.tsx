import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import { ITask, TASK_STATUS } from '../store/projects/types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import {
  FormControl,
  InputLabel,
  Select,
  FilledInput,
  MenuItem,
} from '@material-ui/core'
import { connect } from 'react-redux'

interface SingleTask {
  handleChangeStatus: any
}

const Task: React.SFC<ITask & SingleTask> = ({
  title,
  description,
  status,
  timer,
  id,
  projectId,
  handleChangeStatus,
}) => {
  console.error('Task re-renders')
  const handleChange = (e: any) => {
    handleChangeStatus(
      { title, description, status, timer, projectId, id },
      e.target.value
    )
  }
  return (
    <Grid item>
      <Card>
        <CardContent>
          <FormControl variant="filled">
            <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
            <Select
              value={status}
              onChange={handleChange}
              input={<FilledInput name="Status" />}>
              {Object.values(TASK_STATUS).map(status => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="subtitle1">{title} </Typography>
          <Typography variant="body2">{description} </Typography>
          <Typography variant="h6">{timer} </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

// const
// export default connect()(Task)

export default Task
