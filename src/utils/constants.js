import React from 'react'
import { Row, Col, Button } from 'antd'

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
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Acciones',
    key: 'actions',
    render: record => {
      return (
        <Row gutter={16}>
          <Col>
            <Button type="primary" onClick={params.handleEdit(record)}>
              Editar
            </Button>
          </Col>
          <Col>
            <Button
              type="primary"
              danger={true}
              onClick={params.handleDelete(record)}
            >
              Eliminar
            </Button>
          </Col>
        </Row>
      )
    },
  },
]

export const users = [
  {
    username: 'daniel',
    password: '123456',
    role: 'Administrador',
    key: '1',
  },
  {
    username: 'hector',
    password: '456789',
    role: 'Asesor',
    key: '2',
  },
  {
    username: 'rolando',
    password: '456778',
    role: 'Gerente',
    key: '3',
  },
]

export const userKeys = ['username', 'password', 'role']
