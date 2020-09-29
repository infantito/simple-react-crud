import React, { useEffect } from 'react'
import { Form, Input, Checkbox, Button, Select } from 'antd'
import { Title } from 'components'
import { categories, PRODUCT_KEYS } from 'utils/constants'
import './style.scss'

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
        <Select placeholder="Selecciona una categoría" allowClear={true}>
          {categories.map(category => (
            <Select.Option key={category.value} value={category.value}>
              {category.text}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="Estado" valuePropName="checked">
        <Checkbox>Activo</Checkbox>
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {internalProps => {
          const values = internalProps.getFieldsValue(PRODUCT_KEYS)

          const isDisabled =
            Object.values(values).filter(value => !value).length > 0

          return (
            <Button type="primary" htmlType="submit" disabled={isDisabled}>
              Guardar
            </Button>
          )
        }}
      </Form.Item>
      <fieldset></fieldset>
    </Form>
  )
}

export default Product
