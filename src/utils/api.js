import authentication from './authentication'
import { DOMAIN, PATHS } from './constants'

const authenticate = async values => {
  const endpoint = `${DOMAIN}${PATHS.authenticate}`

  const searchParams = new URLSearchParams()

  searchParams.append('username', values.username)

  searchParams.append('password', values.password)

  searchParams.append('grant_type', 'password')

  let session = null

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: searchParams,
    })

    const json = await response.json()

    session = json
  } catch (e) {
    console.error(e)
  } finally {
    return session
  }
}

const getProducts = async () => {
  const endpoint = `${DOMAIN}${PATHS.getProducts}`

  let data = []

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${authentication.token}`,
        'Content-type': 'application/x-www-form-urlencoded',
      },
    })

    const json = await response.json()

    data = json
  } catch (e) {
    console.error(e)
  } finally {
    return data
  }
}

const createProduct = async values => {
  const endpoint = `${DOMAIN}${PATHS.createProduct}`

  const searchParams = new URLSearchParams()

  searchParams.append('Descripcion', values.Descripcion)

  searchParams.append('Precio', values.Precio)

  searchParams.append('CategoriaId', values.CategoriaId)

  searchParams.append('FechaRegistro', new Date().toISOString())

  searchParams.append('Estado', values.Estado)

  let id = null

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${authentication.token}`,
      },
      body: searchParams,
    })

    const json = await response.json()

    id = json
  } catch (e) {
    console.error(e)
  } finally {
    return id
  }
}

const deleteProduct = async id => {
  const endpoint = new URL(`${DOMAIN}${PATHS.deleteProduct}`)

  endpoint.searchParams.append('Id', id)

  let success = false

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${authentication.token}`,
      },
    })

    const json = await response.json()

    success = json
  } catch (e) {
    console.error(e)
  } finally {
    return success
  }
}

const updateProduct = async values => {
  const endpoint = `${DOMAIN}${PATHS.updateProduct}`

  const searchParams = new URLSearchParams()

  searchParams.append('Id', values.Id)

  searchParams.append('Descripcion', values.Descripcion)

  searchParams.append('Precio', values.Precio)

  searchParams.append('CategoriaId', values.CategoriaId)

  searchParams.append('FechaRegistro', new Date().toISOString())

  searchParams.append('Estado', values.Estado)

  let success = null

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${authentication.token}`,
      },
      body: searchParams,
    })

    const json = await response.json()

    success = json
  } catch (e) {
    console.error(e)
  } finally {
    return success
  }
}

export {
  authenticate,
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
}
