import React from 'react'
import { Form } from 'antd'
import Product from 'containers/product'

const UpsertProduct = props => {
  const [form] = Form.useForm()

  const handleSubmit = async values => {
    let product = props.product

    if (props.product) {
      product = { ...product, ...values }
    }

    props.handleUpsertProduct(values, product?.Id)

    if (!product?.Id) {
      form.resetFields()
    }
  }

  return (
    <Product
      form={form}
      initialValues={props.product}
      handleSubmit={handleSubmit}
    />
  )
}

export default UpsertProduct
