import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { Title } from 'components'
import { USER_KEYS } from 'utils/constants'
import './styles.scss'

const Auth = props => {
  const { form, initialValues, handleSubmit } = props

  useEffect(() => {
    form.resetFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues])

  return (
    <Form
      layout="vertical"
      name="basic"
      form={form}
      initialValues={{}}
      onFinish={handleSubmit}
      className="form"
    >
      <Title>Iniciar sesión</Title>
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
        <Input autoComplete="username" />
      </Form.Item>
      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          { required: true, message: 'Por favor ingrese su contraseña.' },
        ]}
      >
        <Input.Password autoComplete="current-password" />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {internalProps => {
          const values = internalProps.getFieldsValue(USER_KEYS)

          const isDisabled =
            Object.values(values).filter(value => !value).length > 0

          return (
            <Button type="primary" htmlType="submit" disabled={isDisabled}>
              Ingresar
            </Button>
          )
        }}
      </Form.Item>
    </Form>
  )
}

export default Auth
