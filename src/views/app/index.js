import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Dashboard from 'views/dashboard'

const App = () => {
  return (
    <Router>
      <Dashboard />
    </Router>
  )
}

export default App
