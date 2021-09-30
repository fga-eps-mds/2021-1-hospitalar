import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GenerateReport } from './pages/GenerateReport'
import { GerarRelatorio } from './pages/gerarRelatorio'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { PaginaAddItem } from './pages/PaginaAddItem'
import { PaginaAvaliacao } from './pages/PaginaAvaliacao'
import React from 'react'

/**
 * Rotas do browser.
 * Para adicionar uma rota use o component Route com o parâmetro exact.
 *
 * @return JSX.Element
 */
export function Routes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route exact path='/avaliacao' component={PaginaAvaliacao} />
        <Route exact path='/NovaAvaliacao/Adicao' component={PaginaAddItem} />
        <Route exact path='/relatorio' component={GenerateReport} />
        <Route exact path='/gerarRelatorio' component={GerarRelatorio} />
      </Switch>
    </BrowserRouter>
  )
}
