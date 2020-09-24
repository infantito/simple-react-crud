import React from 'react'
import { TextField, Button } from 'components'
import './styles.scss'

const Form = props => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <fieldset>
        <TextField placeholder="Nombre usuario" />
        <TextField type="password" placeholder="Contraseña" />
        <Button type="submit">Enviar</Button>
      </fieldset>
    </form>
  )
}

export default Form
