import { Card, CardActions, Grid, IconButton } from '@material-ui/core'
import { AddCircleRounded as AddIcon } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import { Header } from '../../components/GlobalComponents/Header'
import { TodoCard } from '../../components/HomePageComponents/TodoCard'
import { TodoForm } from '../../components/HomePageComponents/TodoForm'

export type TodoItem = {
  id: number
  title: string
  description: string
  completed: boolean
}

export const Home: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([])
  const [modal, setModal] = useState<boolean>(false)

  const refreshList = () => {
    api
      .get<TodoItem[]>('todo/')
      .then(({ data }) => setTodoList(data))
      .catch(console.log)
  }

  useEffect(refreshList, [])

  const toggle = () => {
    setModal(!modal)
  }

  const handleDelete = (item: TodoItem) => {
    api.delete(`todo/${item.id}/`).then(refreshList).catch(console.log)
  }

  const handleEdit = (item: TodoItem) => {
    item.completed = !item.completed
    api.put(`todo/${item.id}/`, item).then(refreshList).catch(console.log)
  }

  const handleCreate = (item: TodoItem) => {
    api.post('todo/', item).then(refreshList).catch(console.log)
  }

  const generateList = () => {
    return todoList.map((value, index) => (
      <TodoCard
        key={index}
        value={value}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    ))
  }

  const generateAddCard = () => {
    return (
      <Grid item xs={12} sm={4}>
        <Card>
          <CardActions>
            <IconButton onClick={toggle}>
              <AddIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    )
  }

  return (
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <Header title='Home' />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            {generateList()}
            {generateAddCard()}
            {modal && <TodoForm toggle={toggle} handleSave={handleCreate} />}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  )
}
