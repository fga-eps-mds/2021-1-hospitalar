import { Header } from '../../components/GlobalComponents/Header'
import React from 'react'
import { useStyles } from './styles'

export function GerarRelatorio(): React.ReactElement {
  const classes = useStyles()

  return (
    <>
      <div className={classes.barraFundo} />
      <Header
        links={[
          { texto: 'Home', link: '/' },
          { texto: 'Nova Avaliação', link: '/NovaAvaliacao' },
          { texto: 'Avaliações', link: '/avaliacao' },
          { texto: 'Relatórios', link: '/relatorio' },
        ]}
      />
      <div className={classes.barraUm} />
      <div className={classes.barraDois}>
        <p className={classes.nomeTrab}>FAMil</p>
      </div>
      <div className={classes.barraTres}>
        <p className={classes.textoMeio}>Ferramenta de acreditação militar</p>
      </div>

      <div className={classes.barraQuatro}>
        <h1 className={classes.tituloEntradaCodigo}>GERAR RELATÓRIO</h1>
        <input className={classes.entradaCodigo} placeholder='Digite o código' />
        <div className={classes.botoes}>
          <button type='button' className={classes.btnUm}>
            Pré-Visualizar
          </button>
          <button type='button' className={classes.btnDois}>
            BAIXAR (.PDF)
          </button>
        </div>
      </div>
    </>
  )
}
