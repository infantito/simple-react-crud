import React from 'react'
import { Form } from 'antd'
import { Product } from 'containers'

const UpsertProduct = props => {
  const [form] = Form.useForm()

  const handleSubmit = async values => {
    let product = props.product

    if (props.product) {
      product = { ...product, ...values }
    }

    props.handleSubmit(values, product?.Id)

    if (!product?.id) {
      form.resetFields()
    }
  }

  return (
    <Product
      form={form}
      handleSubmit={handleSubmit}
      initialValues={props.product}
    />
  )
}

export default UpsertProduct
