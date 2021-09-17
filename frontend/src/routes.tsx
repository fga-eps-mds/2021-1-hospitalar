import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
<<<<<<< HEAD
import { Login } from './pages/Login'
=======
import { PaginaAddItem } from './pages/PaginaAddItem'
import { PaginaAvaliacao } from './pages/PaginaAvaliacao'
import { GenerateReport } from './pages/GenerateReport'
import React from 'react'
>>>>>>> ae861d4a1054f9b4305a1ccd9742884c3bbab362

/**
 * Rotas do browser.
 * Para adicionar uma rota use o component Route
 *
 * @return JSX.Element
 */
export function Routes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home}></Route>
=======
        <Route exact path='/' component={Home} />
        <Route exact path='/NovaAvaliacao' component={PaginaAvaliacao} />
        <Route exact path='/NovaAvaliacao/Adicao' component={PaginaAddItem} />
        <Route path='/relatorio' component={GenerateReport} />
>>>>>>> ae861d4a1054f9b4305a1ccd9742884c3bbab362
      </Switch>
    </BrowserRouter>
  )
}
