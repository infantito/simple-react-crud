import React from 'react'
import { Form, Input, Button } from 'antd'
import './styles.scss'

const SignIn = () => {
  const handleSubmit = values => {
    console.log(values)
  }

  return (
    <Form
      layout="vertical"
      name="basic"
      initialValues={{}}
      onFinish={handleSubmit}
      className="form"
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
