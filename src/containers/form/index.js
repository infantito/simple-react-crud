import React, { useState } from 'react'
import { TextField, Button } from 'components'
import './styles.scss'

const Form = props => {
  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const handleChange = e => {
    const { name, value } = e.target

    if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  return (
    <form
      className="form"
      onSubmit={props.handleSubmit({ username, password })}
    >
      <fieldset>
        <TextField
          onChange={handleChange}
          placeholder="Nombre usuario"
          value={username}
          name="username"
        />
        <TextField
          onChange={handleChange}
          type="password"
          placeholder="Contraseña"
          value={password}
          name="password"
        />
        <Button type="submit">Enviar</Button>
      </fieldset>
    </form>
  )
}

export default Form
