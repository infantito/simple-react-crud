import React from 'react'
import { Row, Button } from 'antd'

export const getColumns = params => [
  {
    title: 'Nombre de usuario',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Contraseña',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Acciones',
    key: 'actions',
    render: record => {
      return (
        <Row>
          <Button onClick={params.handleDelete(record)}>Eliminar</Button>
        </Row>
      )
    },
  },
]

export const users = [
  {
    username: 'daniel',
    password: '123456',
    key: '1',
  },
  {
    username: 'hector',
    password: '456789',
    key: '2',
  },
  {
    username: 'rolando',
    password: '456778',
    key: '3',
  },
]
