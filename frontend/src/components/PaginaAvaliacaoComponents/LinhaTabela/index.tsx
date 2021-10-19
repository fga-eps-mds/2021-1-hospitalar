import { Checkbox, IconButton, TableCell, TableRow } from '@material-ui/core'
import React, { useState } from 'react'
import { Subtopico } from '../../../types/Avaliacao'
import { TextField } from '../../GlobalComponents/Inputs/TextField'
import { EditRounded, DoneRounded, DeleteRounded } from '@material-ui/icons'

type Props = {
  index: number
  subtopico: Subtopico
}

type Status = 'C' | 'PC' | 'NC' | 'NA'

export function LinhaTabela({ index, subtopico }: Props): React.ReactElement {
  const [botaoEscolhido, setBotaoEscolhido] = useState<Status>(subtopico.status)
  const [nome, setNome] = useState<string>(subtopico.nome)
  const [pontuacao, setPontuacao] = useState<number>(subtopico.pontuacao)
  const [comentario, setComentario] = useState<string>(subtopico.comentario)

  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.name === 'Nome') {
      setNome(e.target.value)
    } else if (e.target.name === 'PT') {
      const pt = Number(e.target.value)
      if (pt === 0) {
        setPontuacao(pt)
      } else if (pt) {
        setPontuacao(pt)
      }
    } else if (e.target.name === 'Comentario') {
      setComentario(e.target.value)
    }
  }

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (
      event.target.id === 'C' ||
      event.target.id === 'PC' ||
      event.target.id === 'NC' ||
      event.target.id === 'NA'
    ) {
      setBotaoEscolhido(event.target.id)
    }
  }

  return (
    <TableRow>
      <TableCell align='center'> {index + 1}</TableCell>
      <TableCell align='center'>
        <TextField name='Nome' label='' value={nome} onChange={handleChange} />
      </TableCell>
      <TableCell align='center'>
        <Checkbox id='C' checked={botaoEscolhido === 'C'} onChange={handleCheck} />
      </TableCell>
      <TableCell align='center'>
        <Checkbox id='PC' checked={botaoEscolhido === 'PC'} onChange={handleCheck} />
      </TableCell>
      <TableCell align='center'>
        <Checkbox id='NC' checked={botaoEscolhido === 'NC'} onChange={handleCheck} />
      </TableCell>
      <TableCell align='center'>
        <Checkbox id='NA' checked={botaoEscolhido === 'NA'} onChange={handleCheck} />
      </TableCell>
      <TableCell align='center'>
        <TextField
          name='PT'
          label=''
          value={pontuacao.toString()}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell align='center'>
        <TextField
          name='Comentario'
          label=''
          value={comentario}
          onChange={handleChange}
        />
      </TableCell>
      {!isEditing ? (
        <TableCell>
          <IconButton color='inherit' onClick={handleEdit}>
            <EditRounded />
          </IconButton>
        </TableCell>
      ) : (
        <TableCell>
          <IconButton color='inherit' onClick={handleEdit}>
            <DoneRounded />
          </IconButton>
        </TableCell>
      )}
      <TableCell>
        <IconButton color='inherit' >
          <DeleteRounded />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
