import React from 'react'
import { Form as AntdForm, notification } from 'antd'
import Form from 'containers/form'

const UpdateUser = props => {
  const [form] = AntdForm.useForm()

  const handleSubmit = values => {
    // TODO: use Fetch Api
    console.info(values)

    notification.success({
      message: '¡Usuario actualizado!',
      description: 'La transacción se realizó correctamente.',
      duration: 2.5,
    })

    props.handleUpdateUser(values, props.user.key)

    form.resetFields()
  }

  return (
    <Form form={form} initialValues={props.user} handleSubmit={handleSubmit} />
  )
}

export default UpdateUser
