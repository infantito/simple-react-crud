import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import authentication from 'utils/authentication'
import { PUBLIC_ROUTES } from 'utils/constants'

const PrivateRoute = props => {
  const { children, ...rest } = props

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
