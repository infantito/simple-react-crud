const generateToken = user => {
  const random = Math.random().toString(36)

  const now = Date.now().toString(36)

  const [, hash] = random.split('.')

  return `${hash}${now}`
}

export default generateToken
