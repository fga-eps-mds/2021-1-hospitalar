import { Header } from '../../components/GlobalComponents/Header'
import React from 'react'
import { useStyles } from './styles'

export function PreVisualizarRelatorio(): React.ReactElement {
  const classes = useStyles()

  return (
    <>
      <div className={classes.barraFundo} />
      <Header
        links={[
          { texto: 'Home', link: '/Home' },
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
        <div className={classes.caixaFlutuante}>
          <div className={classes.tituloCaixa}>
            <h1 className={classes.tituloEntradaCodigo}>PRÉ-VISUALIZAR RELATÓRIO</h1>
          </div>
          <div className={classes.conteudoCaixa}>
            <div className={classes.coluna1}>
              <div className={classes.miniInput}>
                <div className={classes.miniInputAcima}>
                  <p className={classes.titulo}>Hospital</p>
                </div>
                <div className={classes.miniInputAbaixo}>
                  <input className={classes.entrada} />
                </div>
              </div>
              <div className={classes.miniInput}>
                <div className={classes.miniInputAcima}>
                  <p className={classes.titulo}>Sigla</p>
                </div>
                <div className={classes.miniInputAbaixo}>
                  <input className={classes.entrada} />
                </div>
              </div>

              <div className={classes.miniInput}>
                <div className={classes.miniInputAcima}>
                  <p className={classes.titulo}>Código</p>
                </div>
                <div className={classes.miniInputAbaixo}>
                  <input className={classes.entrada} />
                </div>
              </div>
              <div className={classes.miniInput}>
                <div className={classes.miniInputAcima}>
                  <p className={classes.titulo}>Data</p>
                </div>
                <div className={classes.miniInputAbaixo}>
                  <input className={classes.entrada} />
                </div>
              </div>
            </div>

            <div className={classes.coluna2}>
              <div className={classes.plots}>
                <img
                  className={classes.imgPlot}
                  src={`${process.env.REACT_APP_API_URL}avaliacao/${1}/geraGrafico/`}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
