const storage = {
  set: (keyName, value) => {
    localStorage.setItem(keyName, value)
  },
  get: keyName => {
    return localStorage.getItem(keyName)
  },
  clear: () => {
    localStorage.clear()
  },
}

export default storage
