import React from 'react'
import { Form as AntdForm, notification } from 'antd'
import Form from 'containers/form'
import { DOMAIN, PATHS } from 'utils/constants'

const UpsertUser = () => {
  const [form] = AntdForm.useForm()

  const handleSubmit = async values => {
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

      notification.success({
        message: '¡Operación exitosa!',
        description: 'La transacción se realizó correctamente.',
        duration: 2.5,
      })
    } catch (error) {
      console.error(error)

      notification.error({
        message: '¡Operación fallida!',
        description: 'La transacción no se concretó.',
        duration: 2.5,
      })
    } finally {
      form.resetFields()
    }
  }

  return <Form form={form} handleSubmit={handleSubmit} />
}

export default UpsertUser
