import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TableCell,
  TableRow,
} from '@material-ui/core'
import {
  CancelRounded,
  DeleteRounded,
  DoneRounded,
  EditRounded,
} from '@material-ui/icons'
import React, { useState } from 'react'

import { Subtopico } from '../../../types/Avaliacao'
import { TextField } from '../../GlobalComponents/Inputs/TextField'
import { useStyles } from './styles'

/**
 * criando um tipo Props para o crud do subtopico
 */
type Props = {
  index: number
  subtopico: Subtopico
  editable: boolean
  handleUpdateDB: (subtopico: Subtopico) => void
  removerSubtopico: (idEscolhido: number) => void
  cancelarEdicao: () => void
}
/**
 * criando um tipo chamado status (para o status do subtópico)
 */
type Status = 'C' | 'PC' | 'NC' | 'NA'

export function LinhaTabela({
  index,
  subtopico,
  editable,
  handleUpdateDB,
  removerSubtopico,
  cancelarEdicao,
}: Props): React.ReactElement {
  /**
   * classes pega o styles.ts
   * useState para os checkboxes do status
   * useState para o requisito do subtopico
   * useState para pontualçao do subtopico
   * useState para os comentarios do subtopico
   * useState usado em botões
   *
   * useState para saber se os botoes estao sendo editados
   *
   * oldState é o estado anterior do subtopico antes de ser alterado
   */
  const classes = useStyles()
  const [botaoEscolhido, setBotaoEscolhido] = useState<Status>(subtopico.status)
  const [nome, setNome] = useState<string>(subtopico.nome)
  const [pontuacao, setPontuacao] = useState<number>(subtopico.pontuacao)
  const [comentario, setComentario] = useState<string>(subtopico.comentario)
  const [open, setOpen] = React.useState(false)

  const [isEditing, setIsEditing] = useState<boolean>(editable)

  const [oldState, setOldState] = useState({
    botaoEscolhido,
    nome,
    pontuacao,
    comentario,
  })

  /**
   * quando for editar seta o subtopico como oldstate e verifica se está em estado de edição
   */
  const toggle = () => {
    setOldState({
      botaoEscolhido,
      nome,
      pontuacao,
      comentario,
    })
    setIsEditing(!isEditing)
  }
  /**
   * retorna o estado anterior do subtopico
   */
  const returnState = () => {
    setBotaoEscolhido(oldState.botaoEscolhido)
    setNome(oldState.nome)
    setPontuacao(oldState.pontuacao)
    setComentario(oldState.comentario)
  }

  /**
   * muda o estado do campo selecionado
   */
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
  /**
   * verifica o estado do checkbox selecionado
   */
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

    if (event.target.id === 'C') {
      setPontuacao(10)
    } else if (event.target.id === 'PC') {
      setPontuacao(5)
    } else if (event.target.id === 'NC') {
      setPontuacao(0)
    } else if (event.target.id === 'NA') {
      setPontuacao(0)
    }
  }
  /**
   * abre a opção de edição
   */
  const handleClickOpen = () => {
    setOpen(true)
  }
  /**
   * fecha a opção de edição
   */
  const handleClose = () => {
    setOpen(false)
  }

  return (
    /* colunas e linhas da tabela */
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
      {/* botões da tabela */}
      {/* botão de editar */}
      {isEditing ? (
        <TableCell>
          {/* checkboxes do status */}
          <IconButton
            color='inherit'
            style={{ display: 'block', margin: 'auto' }}
            onClick={() => {
              if (botaoEscolhido === 'PC' || botaoEscolhido === 'NC') {
                if (comentario === '') {
                  alert('Necessário preencher campo de comentário!')
                  return
                }
              }
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
          {/* botão de cancelar a edicao */}
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
      {/* botão de deletar */}
      <TableCell>
        <IconButton
          color='inherit'
          style={{ display: 'block', margin: 'auto' }}
          onClick={handleClickOpen}
        >
          <DeleteRounded />
        </IconButton>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle className={classes.textDialogTitle} id='alert-dialog-title'>
            Você deseja excluir este requisito?
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              className={classes.textDialogBox}
              id='alert-dialog-description'
            >
              Apagando este requisito você perderá a nota e comentário atribuídos para
              ele.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              className={classes.dialogCancelDesign}
              variant='outlined'
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button
              className={classes.dialogConfirmDesign}
              variant='outlined'
              onClick={() => {
                if (subtopico.id) {
                  removerSubtopico(subtopico.id)
                }
                setOpen(false)
              }}
              autoFocus
            >
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
