import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { authentication, PUBLIC_ROUTES } from 'utils'

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authentication.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{ pathname: PUBLIC_ROUTES.LOGIN, state: { from: location } }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
