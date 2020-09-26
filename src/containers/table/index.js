import React from 'react'
import { Table as DataGrid } from 'antd'

const Table = props => {
  const { columns, dataSource } = props

  return <DataGrid columns={columns} dataSource={dataSource} />
}

export default Table
