import React from 'react'
import Form from '../../containers/form'

const UpsertUser = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return <Form handleSubmit={handleSubmit} />
}

export default UpsertUser
