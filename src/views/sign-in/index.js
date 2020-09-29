import React from 'react'
import { Form } from 'antd'
import Auth from 'containers/auth'
import { authenticate } from 'utils/api'

const SignIn = () => {
  const [form] = Form.useForm()

  const handleSubmit = async values => {
    const session = await authenticate(values)

    console.log(session)

    form.resetFields()
  }

  return <Auth form={form} handleSubmit={handleSubmit} />
}

export default SignIn
