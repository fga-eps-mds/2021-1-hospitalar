import React from 'react'
import icon_3 from '../../assets/logo_3.svg'
import logo_simples from '../../assets/logo_simples.png'
import { useStyles } from './styles'

export function GerarRelatorio(): React.ReactElement {
  const classes = useStyles()

  return (
    <>
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
    </>
  )
}
