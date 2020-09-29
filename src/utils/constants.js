import React from 'react'
import { Tag, Row, Col, Button } from 'antd'

export const DOMAIN = process.env.REACT_APP_DOMAIN

export const TOKEN = process.env.REACT_APP_TOKEN

export const PATHS = {
  authenticate: '/token',
  getProducts: '/api/Values/GetProducts',
  createProduct: '/api/Values/CreateProduct',
  updateProduct: '/api/Values/EditProduct',
  deleteProduct: '/api/Values/DeleteProduct',
}

export const getColumns = params => [
  {
    title: 'Código',
    dataIndex: 'Id',
    key: 1,
  },
  {
    title: 'Libro',
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
    dataIndex: 'Categoria',
    key: 4,
  },
  {
    title: 'Estado',
    dataIndex: 'Estado',
    key: 5,
    render: status => {
      return (
        <Tag color={status ? 'green' : 'volcano'}>
          {status ? 'Activo' : 'Inactivo'}
        </Tag>
      )
    },
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

export const DATA = [
  {
    key: 1,
    Id: 1,
    Descripcion: 'Pantaleon',
    Precio: 120.5,
    CategoriaId: 1,
    Estado: true,
  },
  {
    key: 2,
    Id: 2,
    Descripcion: 'Pantaleon II',
    Precio: 122.5,
    CategoriaId: 1,
    Estado: false,
  },
  {
    key: 3,
    Id: 3,
    Descripcion: 'Pantaleon III',
    Precio: 125.5,
    CategoriaId: 1,
    Estado: true,
  },
]

export const CATEGORIES = [
  {
    Id: 1,
    Text: 'El Comercio',
  },
  {
    Id: 2,
    Text: 'La República',
  },
]

export const PRODUCT_KEYS = ['Descripcion', 'Precio', 'CategoriaId']

export const STORAGE_KEYS = {
  TOKEN: 'token',
}

export const PUBLIC_ROUTES = {
  HOME: '/',
  LOGIN: '/login',
}

export const MENU = {
  DASHBOARD: {
    path: '/dashboard',
    text: 'Productos',
    icon: '🗄️',
  },
  PRODUCT: {
    path: '/dashboard/product',
    text: 'Crear producto',
    icon: '👤',
  },
}
