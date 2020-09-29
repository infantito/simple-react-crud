import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { Title } from 'components'
import './styles.scss'

const Auth = props => {
  const { form, initialValues, handleSubmit } = props

  useEffect(() => {
    form.resetFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues])

  return (
    <Form
      form={form}
      className="auth"
      layout="vertical"
      initialValues={initialValues || {}}
      onFinish={handleSubmit}
    >
      <Title>Iniciar sesión</Title>
      <fieldset>
        <Form.Item label="Nombre de usuario:" name="username">
          <Input placeholder="Nombre de usuario" />
        </Form.Item>
        <Form.Item label="Contraseña:" name="password">
          <Input.Password placeholder="Contraseña" />
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {internalProps => {
            const values = internalProps.getFieldsValue([
              'username',
              'password',
            ])

            const isDisabled =
              Object.values(values).filter(value => !value).length > 0

            return (
              <Button type="primary" htmlType="submit" disabled={isDisabled}>
                Ingresar
              </Button>
            )
          }}
        </Form.Item>
      </fieldset>
    </Form>
  )
}

export default Auth
