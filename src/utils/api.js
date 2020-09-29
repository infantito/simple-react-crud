import { DOMAIN, PATHS, BEARER, TOKEN } from './constants'

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
  } catch (error) {
    console.error(error)
  } finally {
    return session
  }
}

const getProducts = async () => {
  const endpoint = `${DOMAIN}${PATHS.products}`

  let session = null

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: `${BEARER} ${TOKEN}`,
      },
    })

    const json = await response.json()

    session = json
  } catch (error) {
    console.error(error)
  } finally {
    return session
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
        Authorization: `${BEARER} ${TOKEN}`,
      },
      body: searchParams,
    })

    const json = await response.json()

    id = json
  } catch (error) {
    console.error(error)
  } finally {
    return id
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
        Authorization: `${BEARER} ${TOKEN}`,
      },
      body: searchParams,
    })

    const json = await response.json()

    success = !!json
  } catch (error) {
    console.error(error)
  } finally {
    return success
  }
}

const deleteProduct = async id => {
  const endpoint = new URL(`${DOMAIN}${PATHS.updateProduct}`)

  endpoint.searchParams.append('Id', id)

  let success = null

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `${BEARER} ${TOKEN}`,
      },
    })

    const json = await response.json()

    success = !!json
  } catch (error) {
    console.error(error)
  } finally {
    return success
  }
}

export {
  authenticate,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}
