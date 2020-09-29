import React from 'react'
import { Button, Form, Input } from 'antd'

const Auth = props => {
  const handleSubmit = values => {
    props.handleSubmit(values)
  }

  return (
    <Form
      form={props.form}
      className="form"
      layout="vertical"
      initialValues={{}}
      onFinish={handleSubmit}
    >
      <fieldset>
        <h3>Iniciar sesión</h3>
        <Form.Item
          label="Nombre usuario:"
          name="username"
          rules={[
            {
              required: true,
              message: '¡Por favor ingrese su nombre de usuario!',
            },
          ]}
        >
          <Input placeholder="Ingresar usuario" />
        </Form.Item>
        <Form.Item
          label="Contraseña:"
          name="password"
          rules={[
            {
              required: true,
              message: '¡Por favor ingrese su contraseña!',
            },
          ]}
        >
          <Input.Password placeholder="Ingresar contraseña" />
        </Form.Item>
        <Button htmlType="submit">Iniciar sesión</Button>
      </fieldset>
    </Form>
  )
}

export default Auth
