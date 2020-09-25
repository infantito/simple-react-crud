import React from 'react'
import { Form as AntdForm } from 'antd'
import Form from 'containers/form'

const UpsertUser = () => {
  const [form] = AntdForm.useForm()

  const handleSubmit = values => {
    // TODO: use Fetch Api
    console.info(values)

    form.resetFields()
  }

  return <Form form={form} handleSubmit={handleSubmit} />
}

export default UpsertUser
