import React, { useState } from 'react'

import { generatePDF } from '../../api'
import icon_3 from '../../assets/logo_3.svg'
import logo_simples from '../../assets/logo_simples.png'
import { useStyles } from './styles'

export function GerarRelatorio(): React.ReactElement {
  const classes = useStyles()

  const [selectedHospitalName] = useState('')

  const handleSubmit = () => {
    generatePDF(selectedHospitalName)
  }

  return (
    <>
      <div className={classes.barraFundo} />
      <div className={classes.iconSpace}>
        <img className={classes.iconPerfil} src={icon_3} alt='' />
      </div>
      <div className={classes.barraTopo}>
        <div className={classes.btnHome0}>
          <a className={classes.tituloBarraTopo} href='/home'>
            Home
          </a>
        </div>
        <div className={classes.btnHome1}>
          <a className={classes.tituloBarraTopo} href='/NovaAvaliacao/Adicao'>
            Nova Avaliação
          </a>
        </div>
        <img className={classes.imagem} src={logo_simples} alt='' />
        <div className={classes.btnHome2}>
          <a className={classes.tituloBarraTopo} href='/NovaAvaliacao'>
            Avaliação
          </a>
        </div>
        <div className={classes.btnHome3}>
          <a className={classes.tituloBarraTopo} href='/relatorio'>
            Relatório
          </a>
        </div>
      </div>
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
          <button type='button' onClick={handleSubmit} className={classes.btnDois}>
            BAIXAR (.PDF)
          </button>
        </div>
      </div>
    </>
  )
}
