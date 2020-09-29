import { notification } from 'antd'
import { BEARER, DOMAIN, PATHS, TOKEN } from './constants'

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

const createUser = async values => {
  const endpoint = `${DOMAIN}${PATHS.createUser}`

  const searchParams = new URLSearchParams()

  searchParams.append('username', values.username)

  searchParams.append('password', values.password)

  searchParams.append('grant_type', 'password')

  let user = null

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `${BEARER} ${TOKEN}`,
      },
      method: 'POST',
      body: searchParams,
    })

    user = await response.json()

    notification.success({
      message: '¡Usuario creado!',
      description: 'La transacción se realizó correctamente.',
      duration: 2.5,
    })
  } catch (error) {
    notification.error({
      message: '¡Ocurrió un error!',
      description: 'La transacción no se concretó.',
      duration: 2.5,
    })
  } finally {
    return user
  }
}

export { authenticate, createUser }
