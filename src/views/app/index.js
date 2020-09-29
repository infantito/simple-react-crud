import React, { useEffect, useState } from 'react'
import { Row } from 'antd'
import UpsertProduct from 'views/upsert-product'
import { Table } from 'containers'
import { getColumns, products as dataSource } from 'utils/constants'
import { getProducts } from 'utils/api'

const App = () => {
  const [product, setProduct] = useState(null)

  const [products, setProducts] = useState(dataSource)

  const handleUpsertProduct = (item, id) => {
    // UPDATE
    if (id) {
      setProduct(null)

      setProducts(prevState => {
        return prevState.map(record => {
          if (record.Id === id) {
            return {
              ...record,
              ...item,
              key: id,
            }
          }

          return record
        })
      })

      return null
    }

    // CREATE
    // NOTE: Don't do array.push(value)
    setProducts(prevState => {
      // Base36 = hexatridecimal
      const key = Date.now().toString(36)

      return [...prevState, { Id: key, ...item, key }]
    })
  }

  const handleEdit = record => () => {
    setProduct(record)
  }

  const handleDelete = record => () => {
    setProducts(prevState => {
      return prevState.filter(item => item.Id !== record.Id)
    })
  }

  useEffect(() => {
    getProducts()

    // TODO: format products (status)
  }, [])

  return (
    <Row>
      <UpsertProduct
        handleUpsertProduct={handleUpsertProduct}
        product={product}
      />
      <Table
        columns={getColumns({ handleEdit, handleDelete })}
        dataSource={products}
      />
    </Row>
  )
}

export default App
