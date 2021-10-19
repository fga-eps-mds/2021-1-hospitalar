import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Checkbox,
} from '@material-ui/core'
import React, { useState } from 'react'
import { Secao } from '../../../types/Avaliacao'
import { LinhaTabela } from '../LinhaTabela'

type Props = {
  secao: Secao
}

export function TabelaSecoes({ secao }: Props): React.ReactElement {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Nª</TableCell>
            <TableCell align='center'>Nome</TableCell>
            <TableCell align='center'>C</TableCell>
            <TableCell align='center'>PC</TableCell>
            <TableCell align='center'>NC</TableCell>
            <TableCell align='center'>NA</TableCell>
            <TableCell align='center'>PT</TableCell>
            <TableCell align='center'>Comentário</TableCell>
            <TableCell align='center'>Editar</TableCell>
            <TableCell align='center'>Remover</TableCell>
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
