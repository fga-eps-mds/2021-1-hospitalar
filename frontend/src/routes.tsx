import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import React from 'react'

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
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
