import React from 'react'

const Button = props => {
  const { children, ...rest } = props

  return (
    <button type="button" {...rest} className="container">
      {children}
    </button>
  )
}

export default Button
