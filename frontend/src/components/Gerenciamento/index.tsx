import { Box, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { Button } from '../GlobalComponents/Inputs/Button'
import { ColetaDados } from '../ColetaDados'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

interface Props {
  lista: ColetaDados
  deleteLista(variavel: string): void
}

export const Gerenciamento = ({ lista, deleteLista }: Props) => {
  const history = useHistory()

  return (
    <div className='teste'>
      <div>
        <table>
          <thead>
            <tr>
              <th>Índice</th>
              <th>Qualificação</th>
              <th>Avaliacao</th>
              <th>Pontuacao</th>
              <th>Comentario</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{lista.OBindice}</td>
              <td>{lista.OBqualificacao}</td>
              <td>{lista.OBavaliacao}</td>
              <td>{lista.OBpontuacao}</td>
              <td>{lista.OBcomentario}</td>
              <td>{lista.OBstatus}</td>
            </tr>
          </tbody>
        </table>
        <Button
          onClick={() => {
            deleteLista(lista.OBindice)
          }}
        >
          apagar
        </Button>
      </div>
    </div>
  )
}

export default Gerenciamento
