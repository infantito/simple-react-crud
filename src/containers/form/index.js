import React from 'react'
import { TextField, Button } from 'components'

const Form = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <fieldset>
        <TextField />
        <TextField type="password" />
        <Button type="submit">Enviar</Button>
      </fieldset>
    </form>
  )
}

export default Form
