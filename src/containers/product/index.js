import React, { useEffect } from 'react'
import { Form, Input, Checkbox, Button, Select } from 'antd'
import { Title } from 'components'
import { PRODUCT_KEYS, CATEGORIES } from 'utils/constants'
import './style.scss'

const { Option } = Select

const Product = props => {
  const { form, initialValues, handleSubmit } = props

  useEffect(() => {
    form.resetFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues])

  return (
    <Form
      form={form}
      className="product"
      layout="vertical"
      initialValues={initialValues || { Estado: true }}
      onFinish={handleSubmit}
    >
      <Title>Mi Producto</Title>
      <Form.Item label="Descripción:" name="Descripcion">
        <Input placeholder="Descripción del producto" />
      </Form.Item>
      <Form.Item label="Precio:" name="Precio">
        <Input placeholder="Precio" />
      </Form.Item>
      <Form.Item label="Categoría:" name="CategoriaId">
        <Select placeholder="Seleccionar categoría">
          {CATEGORIES.map(option => {
            return (
              <Option key={option.Id} value={option.Id}>
                {option.Text}
              </Option>
            )
          })}
        </Select>
      </Form.Item>
      <Form.Item name="Estado" valuePropName="checked">
        <Checkbox>Activo</Checkbox>
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {internalProps => {
          const values = internalProps.getFieldsValue(PRODUCT_KEYS)

          const items = Object.values(values)

          const isDisabled = items.some(item => Boolean(item) === false)

          return (
            <Button type="primary" disabled={isDisabled} htmlType="submit">
              Guardar
            </Button>
          )
        }}
      </Form.Item>
    </Form>
  )
}

export default Product
