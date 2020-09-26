import { STORAGE_KEYS } from './constants'

const authentication = {
  get token() {
    return localStorage.getItem(STORAGE_KEYS.TOKEN)
  },
  get user() {
    return localStorage.getItem(STORAGE_KEYS.USER)
  },
}

export default authentication
