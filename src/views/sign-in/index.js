import React from 'react'
import { Form, notification } from 'antd'
import Auth from 'containers/auth'
import { authenticate } from 'utils/api'
import storage from 'utils/storage'
import { MENU, STORAGE_KEYS } from 'utils/constants'
import { useHistory } from 'react-router-dom'

const SignIn = () => {
  const history = useHistory()

  const [form] = Form.useForm()

  const handleSubmit = async values => {
    form.resetFields()

    const session = await authenticate(values)

    if (session?.access_token) {
      storage.set(STORAGE_KEYS.TOKEN, session.access_token)

      history.replace(MENU.DASHBOARD.path)
    } else {
      notification.error({
        message: 'Usuario y/o contraseña incorrecta.',
        description: 'Intentelo nuevamente',
        duration: 2.5,
      })
    }
  }

  return <Auth form={form} handleSubmit={handleSubmit} />
}

export default SignIn
