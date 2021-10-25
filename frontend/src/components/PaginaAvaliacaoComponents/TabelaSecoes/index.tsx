import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { Secao, Subtopico } from '../../../types/Avaliacao'

import { LinhaTabela } from '../LinhaTabela'
import React from 'react'
import { useStyles } from './styles'

type Props = {
  secao: Secao
  isEditableArray: boolean[]
  handleUpdateDB: (subtopico: Subtopico) => void
  removerSubtopico: (idEscolhido: number) => void
  cancelarEdicao: () => void
}

export function TabelaSecoes({
  secao,
  isEditableArray,
  handleUpdateDB,
  removerSubtopico,
  cancelarEdicao,
}: Props): React.ReactElement {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.designHeader}>Nº</TableCell>
            <TableCell className={classes.designHeader}>Requisito</TableCell>
            <TableCell className={classes.designHeader}>C</TableCell>
            <TableCell className={classes.designHeader}>PC</TableCell>
            <TableCell className={classes.designHeader}>NC</TableCell>
            <TableCell className={classes.designHeader}>NA</TableCell>
            <TableCell className={classes.designHeader}>PT</TableCell>
            <TableCell className={classes.designHeader}>Comentário</TableCell>
            <TableCell className={classes.designHeader}>Editar</TableCell>
            <TableCell className={classes.designHeader}>Excluir</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {secao.subtopicos.map((value, index) => (
            <LinhaTabela
              key={index}
              subtopico={value}
              index={index}
              editable={isEditableArray[index]}
              handleUpdateDB={handleUpdateDB}
              removerSubtopico={removerSubtopico}
              cancelarEdicao={cancelarEdicao}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
