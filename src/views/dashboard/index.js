import React, { useEffect, useState } from 'react'
import { Switch, useHistory } from 'react-router-dom'
import { Table, Menu, PrivateRoute } from 'containers'
import { UpsertProduct } from 'views'
import { getColumns, CATEGORIES, MENU } from 'utils/constants'
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from 'utils/api'
import './style.scss'

const formatProducts = products => {
  return products.map(product => {
    const category = CATEGORIES.find(item => {
      return item.Id === product.CategoriaId
    }) || { Id: 3, Text: 'Otro' }

    return {
      ...product,
      Categoria: category.Text,
    }
  })
}

const Dashboard = () => {
  const [product, setProduct] = useState(null)

  const [products, setProducts] = useState([])

  const history = useHistory()

  const handleEdit = record => () => {
    setProduct(record)

    return history.push(`${MENU.PRODUCT.path}/${record.Id}`)
  }

  const handleDelete = record => async () => {
    const success = await deleteProduct(record.Id)

    if (success) {
      setProducts(prevState => {
        return prevState.filter(item => item.Id !== record.Id)
      })
    }
  }

  const handleSubmit = async (values, id) => {
    if (id) {
      setProduct(null)

      const success = await updateProduct({ ...product, ...values })

      if (success) {
        setProducts(prevState => {
          return prevState.map(record => {
            if (record.Id === id) {
              return { ...record, ...values, key: id }
            }

            return record
          })
        })
      }
    } else {
      const key = await createProduct(values)

      setProducts(prevState => {
        return [...prevState, { ...values, Id: key }]
      })
    }

    history.push(MENU.DASHBOARD.path)
  }

  useEffect(() => {
    getProducts().then(data => {
      if (Array.isArray(data)) {
        setProducts(data)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <article className="container">
      <section className="container-menu">
        <Menu />
      </section>
      <section className="container-content">
        <Switch>
          <PrivateRoute exact={true} path={MENU.DASHBOARD.path}>
            <Table
              columns={getColumns({ handleEdit, handleDelete })}
              dataSource={formatProducts(products)}
            />
          </PrivateRoute>
          <PrivateRoute exact={true} path={MENU.PRODUCT.path}>
            <UpsertProduct handleSubmit={handleSubmit} />
          </PrivateRoute>
          <PrivateRoute exact={true} path={`${MENU.PRODUCT.path}/:id`}>
            <UpsertProduct handleSubmit={handleSubmit} product={product} />
          </PrivateRoute>
        </Switch>
      </section>
    </article>
  )
}

export default Dashboard
