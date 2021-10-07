import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { EditarItem } from './pages/EditarItem'
import { GenerateReport } from './pages/GenerateReport'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NovaAvaliacao } from './pages/NovaAvaliacao'
import { PaginaAddItem } from './pages/PaginaAddItem'
import { PaginaAvaliacao } from './pages/PaginaAvaliacao'
import { PreVisualizarRelatorio } from './pages/PreVisualizarRelatorio'
import React from 'react'
import { Template } from './components/GlobalComponents/Template'

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
        <Route exact path='/editarItem' component={EditarItem} />
        <Route exact path='/NovaAvaliacao/Adicao' component={PaginaAddItem} />
        <Route exact path='/relatorio' component={GenerateReport} />
        <Route exact path='/NovaAvaliacao' component={NovaAvaliacao} />
        <Route exact path='/PreVisualizar' component={PreVisualizarRelatorio} />
      </Switch>
    </BrowserRouter>
  )
}
