import React from 'react'
import { Row, Col, Button } from 'antd'

export const DOMAIN = process.env.REACT_APP_DOMAIN

export const TOKEN = process.env.REACT_APP_TOKEN

export const BEARER = 'bearer'

export const PATHS = {
  authenticate: '/token',
  products: '/api/Values/GetProducts',
}

export const getColumns = params => [
  {
    title: 'Código',
    dataIndex: 'Id',
    key: 1,
  },
  {
    title: 'Descripción',
    dataIndex: 'Descripcion',
    key: 2,
  },
  {
    title: 'Precio',
    dataIndex: 'Precio',
    key: 3,
  },
  {
    title: 'Categoría',
    dataIndex: 'CategoriaId',
    key: 3,
  },
  {
    title: 'Activo',
    dataIndex: 'Estado',
    key: 4,
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

export const products = [
  {
    key: 1,
    Id: 1,
    Descripcion: 'Don Quijote de la Mancha',
    Precio: 51.0,
    CategoriaId: 1,
    FechaRegistro: '2020-09-28T01:02:25.67',
    Estado: true,
  },
  {
    key: 2,
    Id: 2,
    Descripcion: 'El principito',
    Precio: 86.0,
    CategoriaId: 1,
    FechaRegistro: '2020-09-28T01:02:25.67',
    Estado: true,
  },
  {
    key: 3,
    Id: 3,
    Descripcion: 'Las aventuras de Alicia en el país de las maravillas',
    Precio: 72.0,
    CategoriaId: 1,
    FechaRegistro: '2020-09-28T01:02:25.67',
    Estado: true,
  },
  {
    key: 4,
    Id: 4,
    Descripcion: 'El código Da Vinci',
    Precio: 62.0,
    CategoriaId: 1,
    FechaRegistro: '2020-09-28T01:02:25.67',
    Estado: true,
  },
  {
    key: 5,
    Id: 5,
    Descripcion: 'El alquimista',
    Precio: 95.0,
    CategoriaId: 1,
    FechaRegistro: '2020-09-28T01:02:25.67',
    Estado: true,
  },
]

export const productKeys = ['Descripcion', 'Precio', 'CategoriaId']
