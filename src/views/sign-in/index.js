import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { storage, generateToken, STORAGE_KEYS, MENU } from 'utils'
import './styles.scss'

const SignIn = () => {
  const history = useHistory()

  const handleSubmit = values => {
    // TODO: use Fetch Api
    const response = { user: values, token: generateToken() }

    storage.set(STORAGE_KEYS.TOKEN, response.token)

    storage.set(STORAGE_KEYS.USER, JSON.stringify(response.user))

    history.replace(MENU.DASHBOARD)
  }

  return (
    <Form
      layout="vertical"
      name="basic"
      initialValues={{}}
      onFinish={handleSubmit}
      className="login"
    >
      <Form.Item
        label="Nombre de usuario:"
        name="username"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su nombre de usuario.',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          { required: true, message: 'Por favor ingrese su contraseña.' },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SignIn
