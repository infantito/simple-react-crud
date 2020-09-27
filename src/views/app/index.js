import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { PrivateRoute } from 'containers'
import { Dashboard, SignIn } from 'views'
import { authentication, MENU, PUBLIC_ROUTES } from 'utils'

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect
          exact={true}
          from={PUBLIC_ROUTES.HOME}
          to={PUBLIC_ROUTES.LOGIN}
        />
        <Route
          exact={true}
          path={PUBLIC_ROUTES.LOGIN}
          render={() => {
            return authentication.isAuthenticated ? (
              <Redirect to={MENU.DASHBOARD.path} />
            ) : (
              <SignIn />
            )
          }}
        />
        <PrivateRoute path={MENU.DASHBOARD.path}>
          <Dashboard />
        </PrivateRoute>
        <Route path="*">
          <h2>404</h2>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
