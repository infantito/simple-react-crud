import React from 'react'
import Form from 'containers/form'

const UpsertUser = () => {
  const handleSubmit = (values, handleReset) => e => {
    e.preventDefault()

    console.info(values)
    // TODO: use Fetch Api

    handleReset()
  }

  return <Form handleSubmit={handleSubmit} />
}

export default UpsertUser
