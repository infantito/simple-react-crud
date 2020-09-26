import React, { useState } from 'react'
import { Row } from 'antd'
import UpsertUser from 'views/upsert-user'
import { Table } from 'containers'
import { getColumns, users as dataSource } from 'utils/constants'

const App = () => {
  const [user, setUser] = useState(null)

  const [users, setUsers] = useState(dataSource)

  const handleUpsertUser = (user, key) => {
    // UPDATE
    if (key) {
      setUser(null)

      setUsers(prevState => {
        return prevState.map(item => {
          if (item.key === key) {
            return { ...user, key }
          }

          return item
        })
      })

      return null
    }

    // CREATE
    // NOTE: Don't do array.push(value)
    setUsers(prevState => {
      // Base36 = hexatridecimal
      const key = Date.now().toString(36)

      return [...prevState, { ...user, key }]
    })
  }

  const handleEdit = record => () => {
    setUser(record)
  }

  const handleDelete = record => () => {
    setUsers(prevState => {
      return prevState.filter(item => item.key !== record.key)
    })
  }

  return (
    <Row>
      <UpsertUser handleUpsertUser={handleUpsertUser} user={user} />
      <Table
        columns={getColumns({ handleEdit, handleDelete })}
        dataSource={users}
      />
    </Row>
  )
}

export default App
