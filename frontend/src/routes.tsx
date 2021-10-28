import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom'
import React, { useContext } from 'react'

import AuthContext from './context/auth'
import { BuscarAvaliacao } from './pages/BuscarAvaliacao'
import { GerarRelatorio } from './pages/gerarRelatorio'
import { Gerenciador } from './pages/Gerenciador'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NovaAvaliacao } from './pages/NovaAvaliacao'
import { PaginaAvaliacao } from './pages/PaginaAvaliacao'
import { PreVisualizarRelatorio } from './pages/PreVisualizarRelatorio'
import { Usuario } from './types/Usuario'

type Props = RouteProps & {
  isAuthenticated: boolean
}

function PrivateRoute({ children, isAuthenticated, ...rest }: Props): React.ReactElement {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

type AdminProps = RouteProps & {
  user: Usuario | null
  isAuthenticated: boolean
}

function AdminPrivateRoute({
  children,
  user,
  isAuthenticated,
  ...rest
}: AdminProps): React.ReactElement {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuthenticated && user) {
          if (user.admin) {
            return children
          }
        }

        alert('Você não tem permissão para acessar esta página')

        return (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export function Routes(): React.ReactElement {
  const context = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />

        <Route exact path='/login' component={Login} />

        <PrivateRoute path='/home' isAuthenticated={context.signed}>
          <Home />
        </PrivateRoute>

        <PrivateRoute exact path='/avaliacao/:codigo' isAuthenticated={context.signed}>
          <PaginaAvaliacao />
        </PrivateRoute>

        <PrivateRoute exact path='/relatorio' isAuthenticated={context.signed}>
          <GerarRelatorio />
        </PrivateRoute>

        <PrivateRoute exact path='/NovaAvaliacao' isAuthenticated={context.signed}>
          <NovaAvaliacao />
        </PrivateRoute>

        <PrivateRoute exact path='/PreVisualizar' isAuthenticated={context.signed}>
          <PreVisualizarRelatorio />
        </PrivateRoute>

        <PrivateRoute exact path='/avaliacao' isAuthenticated={context.signed}>
          <BuscarAvaliacao />
        </PrivateRoute>

        <AdminPrivateRoute
          exact
          path='/Gerenciador'
          user={context.user}
          isAuthenticated={context.signed}
        >
          <Gerenciador />
        </AdminPrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}
