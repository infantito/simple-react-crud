import React, { useEffect } from 'react'
import { Form as AntdForm, Input, Select, Button } from 'antd'
import { Title } from 'components'
import { userKeys } from 'utils/constants'
import './styles.scss'

const Form = props => {
  const { form, initialValues, handleSubmit } = props

  useEffect(() => {
    form.resetFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues])

  return (
    <AntdForm
      form={form}
      className="form"
      layout="vertical"
      initialValues={initialValues || {}}
      onFinish={handleSubmit}
    >
      <Title>My User</Title>
      <fieldset>
        <AntdForm.Item label="Nombre de usuario:" name="username">
          <Input placeholder="Nombre de usuario" />
        </AntdForm.Item>
        <AntdForm.Item label="Contraseña:" name="password">
          <Input.Password placeholder="Contraseña" />
        </AntdForm.Item>
        <AntdForm.Item label="Role" name="role">
          <Select placeholder="Selecciona un role" allowClear={true}>
            <Select.Option value="admin">Administrador</Select.Option>
            <Select.Option value="adviser">Asesor</Select.Option>
            <Select.Option value="manager">Gerente</Select.Option>
          </Select>
        </AntdForm.Item>
        <AntdForm.Item shouldUpdate={true}>
          {internalProps => {
            const values = internalProps.getFieldsValue(userKeys)

            const isDisabled =
              Object.values(values).filter(value => !value).length > 0

            return (
              <Button type="primary" htmlType="submit" disabled={isDisabled}>
                Submit
              </Button>
            )
          }}
        </AntdForm.Item>
      </fieldset>
    </AntdForm>
  )
}

export default Form
