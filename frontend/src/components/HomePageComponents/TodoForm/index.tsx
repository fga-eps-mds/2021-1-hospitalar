import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { TodoItem } from '../../../pages/Home'
import { Form } from '../../GlobalComponents/Forms/Form'
import { FormDialog } from '../../GlobalComponents/Forms/FormDialog'
import { CheckBox } from '../../GlobalComponents/Inputs/CheckBox'
import { TextField } from '../../GlobalComponents/Inputs/TextField'

type Props = {
  toggle: () => void
  handleSave: (item: TodoItem) => void
}

export const TodoForm: React.FC<Props> = ({ toggle, handleSave }) => {
  const initialTodo = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  }
  const [todoAuxItem, setTodoAuxItem] = useState<TodoItem>(initialTodo)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => {
    e.preventDefault()

    let { name, value } = e.target

    const item = {
      ...todoAuxItem,
      [name]: checked !== undefined ? checked : value,
    }

    setTodoAuxItem(item)
  }

  return (
    <FormDialog
      title={'Create new Todo'}
      item={todoAuxItem}
      toggle={toggle}
      handleSubmit={handleSave}
    >
      <Form>
        <Grid container>
          <Grid item xs={false} sm={4}>
            <TextField
              name='title'
              label='Title'
              value={todoAuxItem.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={false} sm={4}>
            <TextField
              name='description'
              label='Description'
              value={todoAuxItem.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={false} sm={4}>
            <CheckBox
              name='completed'
              label='Completed'
              value={todoAuxItem.completed}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Form>
    </FormDialog>
  )
}
