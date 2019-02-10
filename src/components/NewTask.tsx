import * as React from 'react'
import { Grid, TextField, Button, Drawer } from '@material-ui/core'
import { createTask } from '../store/projects/actions'
import { TASK_STATUS } from '../store/projects/types'
import { toggleForm } from '../store/page/action'

export interface NewTaskProps {
  open: boolean
  currentProjectId: number
  onCreateTask: typeof createTask
  onClose: typeof toggleForm
}

const NewTask = ({
  onCreateTask,
  currentProjectId,
  onClose,
  open
}: NewTaskProps) => {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCreateTask({
      title,
      description,
      status: TASK_STATUS.NOT_STARTED,
      projectId: currentProjectId
    })
  }

  const onModalClose = () => onClose()
  return (
    <Drawer anchor="right" open={open} onClose={onModalClose}>
      <form onSubmit={onSubmit}>
        <Grid container direction="column" alignItems="center" spacing={24}>
          <Grid item>
            <TextField
              margin="normal"
              label="title"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.currentTarget.value)
              }
              value={title}
              fullWidth
            />
            <TextField
              margin="normal"
              label="description"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDescription(e.currentTarget.value)
              }
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
    </Drawer>
  )
}

export default NewTask
