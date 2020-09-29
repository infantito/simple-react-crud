import React from 'react'
import { storage, STORAGE_KEYS } from 'utils'
import './styles.scss'

import { Form } from 'antd'
import Auth from 'containers/auth'
import { authenticate } from 'utils/api'

const SignIn = () => {
  const [form] = Form.useForm()

  const handleSubmit = async values => {
    const session = await authenticate(values)

    // TODO: use Fetch Api
    const response = {
      user: JSON.stringify(session),
      token: session.access_token,
    }

    storage.set(STORAGE_KEYS.TOKEN, response.token)

    storage.set(STORAGE_KEYS.USER, JSON.stringify(response.user))

    form.resetFields()
  }

  return <Auth form={form} handleSubmit={handleSubmit} />
}

export default SignIn
