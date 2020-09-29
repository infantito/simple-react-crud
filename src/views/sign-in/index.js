import React from 'react'
import { Form as AntdForm } from 'antd'
import Form from 'containers/form'
import { authenticate } from 'utils/api'

const SignIn = () => {
  const [form] = AntdForm.useForm()

  const handleSubmit = async values => {
    const session = await authenticate(values)

    console.log(session)

    form.resetFields()
  }

  return <Form form={form} handleSubmit={handleSubmit} />
}

export default SignIn
