import React from 'react'
import { Row } from 'antd'
import UpsertUser from 'views/upsert-user'
import { Table } from 'containers'
import { columns, users } from 'utils/constants'

const App = () => {
  return (
    <Row>
      <UpsertUser />
      <Table columns={columns} dataSource={users} />
    </Row>
  )
}

export default App
