import React from 'react'
import { Form as AntdForm, notification } from 'antd'
import Form from 'containers/form'

const CreateUser = props => {
  const [form] = AntdForm.useForm()

  const handleSubmit = values => {
    // TODO: use Fetch Api
    console.info(values)

    notification.success({
      message: '¡Usuario creado!',
      description: 'La transacción se realizó correctamente.',
      duration: 2.5,
    })

    props.handleCreateUser(values)

    form.resetFields()
  }

  return <Form form={form} handleSubmit={handleSubmit} />
}

export default CreateUser
