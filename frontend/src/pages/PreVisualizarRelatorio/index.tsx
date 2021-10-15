import React from 'react'
import icon_3 from '../../assets/logo_3.svg'
import logo_simples from '../../assets/logo_simples.png'
import { useStyles } from './styles'

export function PreVisualizarRelatorio(): React.ReactElement {
  const classes = useStyles()

  return (
    <>
      <div className={classes.barraFundo} />
      <div className={classes.iconSpace}>
        <img className={classes.iconPerfil} src={icon_3} alt='' />
      </div>
      <div className={classes.barraTopo}>
        <div className={classes.btnHome0}>
          <p className={classes.tituloBarraTopo}>Home</p>
        </div>
        <div className={classes.btnHome1}>
          <p className={classes.tituloBarraTopo}>Nova Avaliação</p>
        </div>
        <img className={classes.imagem} src={logo_simples} alt='' />
        <div className={classes.btnHome2}>
          <p className={classes.tituloBarraTopo}>Avaliação</p>
        </div>
        <div className={classes.btnHome3}>
          <p className={classes.tituloBarraTopo}>Relatório</p>
        </div>
      </div>
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
              <div className={classes.plots} />
              <button type='submit' className={classes.btn}>
                <p className={classes.textoBtn}>GERAR</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
