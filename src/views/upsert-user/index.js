import React from 'react'
import Form from 'containers/form'

const UpsertUser = () => {
  const handleSubmit = values => e => {
    e.preventDefault()

    console.info(values)
  }

  return <Form handleSubmit={handleSubmit} />
}

export default UpsertUser
