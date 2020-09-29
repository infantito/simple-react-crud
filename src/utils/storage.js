const storage = {
  set: (key, value) => {
    localStorage.setItem(key, value)
  },
  get: key => {
    return localStorage.getItem(key)
  },
  clear: () => {
    localStorage.clear()
  },
}

export default storage
