import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, notification } from 'antd'
import Auth from 'containers/auth'
import { storage, STORAGE_KEYS, MENU } from 'utils'
import { authenticate } from 'utils/api'
import './styles.scss'

const SignIn = () => {
  const history = useHistory()

  const [form] = Form.useForm()

  const handleSubmit = async values => {
    const session = await authenticate(values)

    if (session) {
      const response = {
        user: JSON.stringify(session),
        token: session.access_token,
      }

      storage.set(STORAGE_KEYS.TOKEN, response.token)

      storage.set(STORAGE_KEYS.USER, JSON.stringify(response.user))

      history.replace(MENU.DASHBOARD)

      return null
    }

    notification.error({
      message: 'Usuario y/o contraseña incorrecta',
      description: 'Intentelo nuevamente.',
      duration: 2.5,
    })

    form.resetFields()
  }

  return <Auth form={form} handleSubmit={handleSubmit} />
}

export default SignIn
