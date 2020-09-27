import React from 'react'
import { useParams } from 'react-router-dom'
import { Form as AntdForm, notification } from 'antd'
import Form from 'containers/form'

const UpsertUser = props => {
  const [form] = AntdForm.useForm()

  const params = useParams()

  const handleSubmit = values => {
    // TODO: use Fetch Api
    console.info(values)

    notification.success({
      message: '¡Operación exitosa!',
      description: 'La transacción se realizó correctamente.',
      duration: 2.5,
    })

    const key = props.user?.key

    props.handleUpsertUser(values, key)

    if (!key) {
      form.resetFields()
    }
  }

  if (params.id && !props.user) {
    return <h2>El usuario no existe</h2>
  }

  return (
    <Form form={form} initialValues={props.user} handleSubmit={handleSubmit} />
  )
}

export default UpsertUser
