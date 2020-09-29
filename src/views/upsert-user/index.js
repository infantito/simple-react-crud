import React from 'react'
import { Form as AntdForm } from 'antd'
import Form from 'containers/form'
import { createUser } from 'utils/api'

const UpsertUser = () => {
  const [form] = AntdForm.useForm()

  const handleSubmit = async values => {
    const session = await createUser(values)

    console.log(session)

    form.resetFields()
  }

  return <Form form={form} handleSubmit={handleSubmit} />
}

export default UpsertUser
