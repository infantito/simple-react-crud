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
  } catch (error) {
    console.error(error)
  } finally {
    return session
  }
}

export { authenticate }
