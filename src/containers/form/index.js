import React from 'react'
import { Button, Form as AntdForm, Input } from 'antd'

const Form = props => {
  const handleSubmit = values => {
    console.log(values)
  }

  return (
    <AntdForm
      className="form"
      layout="vertical"
      initialValues={{}}
      onFinish={handleSubmit}
    >
      <fieldset>
        <h3>Iniciar sesión</h3>
        <AntdForm.Item label="Nombre usuario:" name="username">
          <Input placeholder="Ingresar usuario" />
        </AntdForm.Item>
        <AntdForm.Item label="Contraseña:" name="password">
          <Input.Password placeholder="Ingresar contraseña" />
        </AntdForm.Item>
        <Button htmlType="submit">Click</Button>
      </fieldset>
    </AntdForm>
  )
}

export default Form
