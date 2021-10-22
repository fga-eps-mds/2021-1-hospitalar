import {
  CancelRounded,
  DeleteRounded,
  DoneRounded,
  EditRounded,
} from '@material-ui/icons'
import { Checkbox, IconButton, TableCell, TableRow } from '@material-ui/core'
import React, { useState } from 'react'

import { Subtopico } from '../../../types/Avaliacao'
import { TextField } from '../../GlobalComponents/Inputs/TextField'
import { useStyles } from './styles'

type Props = {
  index: number
  subtopico: Subtopico
  editable: boolean
  handleUpdateDB: (subtopico: Subtopico) => void
  removerSubtopico: (idEscolhido: number) => void
  cancelarEdicao: () => void
}

type Status = 'C' | 'PC' | 'NC' | 'NA'

export function LinhaTabela({
  index,
  subtopico,
  editable,
  handleUpdateDB,
  removerSubtopico,
  cancelarEdicao,
}: Props): React.ReactElement {
  const classes = useStyles()
  const [botaoEscolhido, setBotaoEscolhido] = useState<Status>(subtopico.status)
  const [nome, setNome] = useState<string>(subtopico.nome)
  const [pontuacao, setPontuacao] = useState<number>(subtopico.pontuacao)
  const [comentario, setComentario] = useState<string>(subtopico.comentario)

  const [isEditing, setIsEditing] = useState<boolean>(editable)

  const [oldState, setOldState] = useState({
    botaoEscolhido,
    nome,
    pontuacao,
    comentario,
  })

  const toggle = () => {
    setOldState({
      botaoEscolhido,
      nome,
      pontuacao,
      comentario,
    })
    setIsEditing(!isEditing)
  }

  const returnState = () => {
    setBotaoEscolhido(oldState.botaoEscolhido)
    setNome(oldState.nome)
    setPontuacao(oldState.pontuacao)
    setComentario(oldState.comentario)
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
      <TableCell className={classes.designNumber}> {index + 1}</TableCell>
      <TableCell className={classes.configTextFieldName}>
        <TextField
          disabled={!isEditing}
          fullWidth
          multiline
          inputProps={{ style: { textAlign: 'justify', fontFamily: 'OpenSans' } }}
          name='Nome'
          label=''
          value={nome}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell align='center'>
        <Checkbox
          disabled={!isEditing}
          id='C'
          checked={botaoEscolhido === 'C'}
          onChange={handleCheck}
        />
      </TableCell>
      <TableCell align='center'>
        <Checkbox
          disabled={!isEditing}
          id='PC'
          checked={botaoEscolhido === 'PC'}
          onChange={handleCheck}
        />
      </TableCell>
      <TableCell align='center'>
        <Checkbox
          disabled={!isEditing}
          id='NC'
          checked={botaoEscolhido === 'NC'}
          onChange={handleCheck}
        />
      </TableCell>
      <TableCell align='center'>
        <Checkbox
          disabled={!isEditing}
          id='NA'
          checked={botaoEscolhido === 'NA'}
          onChange={handleCheck}
        />
      </TableCell>
      <TableCell className={classes.configPunctuation}>
        <TextField
          disabled={!isEditing}
          fullWidth
          multiline
          inputProps={{ style: { textAlign: 'center' } }}
          name='PT'
          label=''
          value={pontuacao.toString()}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell className={classes.configComentary}>
        <TextField
          disabled={!isEditing}
          fullWidth
          multiline
          inputProps={{
            style: { textAlign: 'justify', fontFamily: 'OpenSans' },
          }}
          name='Comentario'
          label=''
          value={comentario}
          onChange={handleChange}
        />
      </TableCell>
      {isEditing ? (
        <TableCell>
          <IconButton
            color='inherit'
            style={{ display: 'block', margin: 'auto' }}
            onClick={() => {
              handleUpdateDB({
                id: subtopico.id,
                nome,
                pontuacao,
                comentario,
                status: botaoEscolhido,
              })
              toggle()
            }}
          >
            <DoneRounded />
          </IconButton>
          <IconButton
            color='inherit'
            style={{ display: 'block', margin: 'auto' }}
            onClick={() => {
              if (subtopico.id === undefined) {
                cancelarEdicao()
              }
              returnState()
              toggle()
            }}
          >
            <CancelRounded />
          </IconButton>
        </TableCell>
      ) : (
        <TableCell>
          <IconButton
            color='inherit'
            style={{ display: 'block', margin: 'auto' }}
            onClick={toggle}
          >
            <EditRounded />
          </IconButton>
        </TableCell>
      )}
      <TableCell>
        <IconButton
          color='inherit'
          style={{ display: 'block', margin: 'auto' }}
          onClick={() => (subtopico.id ? removerSubtopico(subtopico.id) : () => {})}
        >
          <DeleteRounded />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
