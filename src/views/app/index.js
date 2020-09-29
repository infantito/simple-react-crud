import React, { useEffect, useState } from 'react'
import { Row } from 'antd'
import UpsertProduct from 'views/upsert-product'
import { Table } from 'containers'
import { getColumns, categories, products as dataSource } from 'utils/constants'
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from 'utils/api'

const formatProducts = products => {
  return products.map(product => {
    const category = categories.find(
      category => category.value === product.CategoriaId,
    ) || { text: 'Otro' }

    return {
      ...product,
      Categoria: category.text,
    }
  })
}

const App = () => {
  const [product, setProduct] = useState(null)

  const [products, setProducts] = useState(dataSource)

  const handleUpsertProduct = async (item, id) => {
    // UPDATE
    if (id) {
      setProduct(null)

      const success = await updateProduct({ ...product, ...item })

      if (success) {
        setProducts(prevState => {
          return prevState.map(record => {
            if (record.Id === id) {
              return { ...record, ...item, key: id }
            }

            return record
          })
        })
      }

      return null
    }

    // CREATE
    const productId = await createProduct(item)

    if (productId) {
      // NOTE: Don't do array.push(value)
      setProducts(prevState => {
        return [...prevState, { Id: productId, ...item, key: productId }]
      })
    }
  }

  const handleEdit = record => () => {
    setProduct(record)
  }

  const handleDelete = record => async () => {
    const success = await deleteProduct(record.Id)

    if (success) {
      setProducts(prevState => {
        return prevState.filter(item => item.Id !== record.Id)
      })
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Row>
      <UpsertProduct
        handleUpsertProduct={handleUpsertProduct}
        product={product}
      />
      <Table
        columns={getColumns({ handleEdit, handleDelete })}
        dataSource={formatProducts(products)}
      />
    </Row>
  )
}

export default App
