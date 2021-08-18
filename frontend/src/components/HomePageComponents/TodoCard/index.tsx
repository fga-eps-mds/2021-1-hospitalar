import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core'
import { BallotRounded, DeleteRounded } from '@material-ui/icons'
import React from 'react'
import { TodoItem } from '../../../pages/Home'

type Props = {
  value: TodoItem
  handleDelete: (item: TodoItem) => void
  handleEdit: (item: TodoItem) => void
}

export const TodoCard: React.FC<Props> = ({ value, handleDelete, handleEdit }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardHeader
          avatar={<BallotRounded color='primary' />}
          action={
            <IconButton onClick={() => handleDelete(value)}>
              <DeleteRounded color='secondary' />
            </IconButton>
          }
          title={value.title}
        />
        <CardContent>
          <Typography>{value.description}</Typography>
        </CardContent>
        <CardActions>
          <FormControlLabel
            control={
              <Checkbox
                checked={value.completed}
                name='Completed'
                onClick={() => handleEdit(value)}
              />
            }
            label='Completed'
          />
        </CardActions>
      </Card>
    </Grid>
  )
}
