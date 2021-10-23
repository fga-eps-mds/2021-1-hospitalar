import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React, { useState } from 'react'

import { LinhaTabela } from '../LinhaTabela'
import { Secao } from '../../../types/Avaliacao'
import { useStyles } from './styles'

type Props = {
  secao: Secao
}

export function TabelaSecoes({ secao }: Props): React.ReactElement {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.designHeader}>Nº</TableCell>
            <TableCell className={classes.designHeader}>Nome</TableCell>
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
          {secao.subtopicos.map((value, index) => {
            console.log(value)
            return <LinhaTabela key={index} subtopico={value} index={index} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
