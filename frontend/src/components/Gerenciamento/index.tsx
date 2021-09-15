import { Button } from '../GlobalComponents/Inputs/Button'
import { ColetaDados } from '../../pages/PaginaAddItem'
import React from 'react'

type Props = {
  lista: ColetaDados
  deleteLista(variavel: string): void
}

export function Gerenciamento({ lista, deleteLista }: Props): React.ReactElement {
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
