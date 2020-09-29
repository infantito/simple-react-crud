import React, { useEffect } from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import { Title } from 'components'
import { productKeys } from 'utils/constants'
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
        <Input placeholder="Categoria" />
      </Form.Item>
      <Form.Item name="Estado" valuePropName="checked">
        <Checkbox>Activo</Checkbox>
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {internalProps => {
          const values = internalProps.getFieldsValue(productKeys)

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
