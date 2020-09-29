const { STORAGE_KEYS } = require('./constants')
const { default: storage } = require('./storage')

const authentication = {
  get token() {
    return storage.get(STORAGE_KEYS.TOKEN)
  },
  get isAuthenticated() {
    return Boolean(storage.get(STORAGE_KEYS.TOKEN))
  },
}

export default authentication
