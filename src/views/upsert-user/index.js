import React from 'react'
import Form from 'containers/form'
import { DOMAIN, PATHS } from 'utils/constants'

const UpsertUser = () => {
  const handleSubmit = (values, handleReset) => async e => {
    e.preventDefault()

    const endpoint = `${DOMAIN}${PATHS.token}`

    const searchParams = new URLSearchParams()

    searchParams.append('username', values.username)

    searchParams.append('password', values.password)

    searchParams.append('grant_type', 'password')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: searchParams,
      })

      const json = await response.json()

      console.info(json)
    } catch (error) {
      console.error(error)
    } finally {
      handleReset()
    }
  }

  return <Form handleSubmit={handleSubmit} />
}

export default UpsertUser
