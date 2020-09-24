import React from 'react'
import './styles.scss'

const Title = ({ children, ...rest }) => {
  return (
    <h2 className="title" {...rest}>
      {children}
    </h2>
  )
}

export default Title
