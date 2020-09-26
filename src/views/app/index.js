import React, { useState } from 'react'
import { Row } from 'antd'
import UpsertUser from 'views/upsert-user'
import { Table } from 'containers'
import { columns, users as dataSource } from 'utils/constants'

const App = () => {
  const [users, setUsers] = useState(dataSource)

  const handleAddUser = user => {
    // NOTE: Don't do array.push(value)
    setUsers(prevState => {
      // Base36 = hexatridecimal
      const key = Date.now().toString(36)

      return [...prevState, { ...user, key }]
    })
  }

  return (
    <Row>
      <UpsertUser handleAddUser={handleAddUser} />
      <Table columns={columns} dataSource={users} />
    </Row>
  )
}

export default App
