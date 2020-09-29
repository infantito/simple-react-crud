import React, { useEffect, useState } from 'react'
import { Switch, useHistory } from 'react-router-dom'
import { Menu, Table, PrivateRoute } from 'containers'
import { UpsertProduct } from 'views'
import { getColumns, categories, MENU } from 'utils/constants'
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from 'utils/api'
import './styles.scss'

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

const Dashboard = () => {
  const [product, setProduct] = useState(null)

  const [products, setProducts] = useState([])

  const history = useHistory()

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
    } else {
      // CREATE
      const productId = await createProduct(item)

      // NOTE: Don't do array.push(value)

      if (productId) {
        // NOTE: Don't do array.push(value)
        setProducts(prevState => {
          return [...prevState, { Id: productId, ...item, key: productId }]
        })
      }
    }

    history.push(MENU.DASHBOARD.path)
  }

  const handleEdit = record => () => {
    setProduct(record)

    return history.push(`${MENU.PRODUCT.path}/${record.key}`)
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
    getProducts().then(data => {
      if (Array.isArray(data)) {
        setProducts(data)
      }
    })
  }, [])

  return (
    <article className="container">
      <section className="container-menu">
        <Menu options={MENU} history={history} />
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
            <UpsertProduct handleUpsertProduct={handleUpsertProduct} />
          </PrivateRoute>
          <PrivateRoute path={`${MENU.PRODUCT.path}/:id`}>
            <UpsertProduct
              handleUpsertProduct={handleUpsertProduct}
              product={product}
            />
          </PrivateRoute>
        </Switch>
      </section>
    </article>
  )
}

export default Dashboard
