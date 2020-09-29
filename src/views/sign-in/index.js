import React from 'react'
import Form from 'containers/form'
import { authenticate } from 'utils/api'

const SignIn = () => {
  const handleSubmit = (values, handleReset) => async e => {
    e.preventDefault()

    const session = await authenticate(values)

    console.log(session)

    handleReset()
  }

  return <Form handleSubmit={handleSubmit} />
}

export default SignIn
