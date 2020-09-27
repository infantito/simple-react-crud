import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Menu, Table } from 'containers'
import { UpsertUser } from 'views'
import { getColumns, MENU, roles, users as dataSource } from 'utils'
import './styles.scss'

const formatUsers = users => {
  return users.map(user => {
    const role = roles.find(role => role.value === user.role)

    return {
      ...user,
      role: role.text,
    }
  })
}

const Dashboard = () => {
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
    <article className="container">
      <section className="container-menu">
        <Menu options={MENU} />
      </section>
      <section className="container-content">
        <Switch>
          <Route exact={true} path={MENU.HOME.path}>
            <Table
              columns={getColumns({ handleEdit, handleDelete })}
              dataSource={formatUsers(users)}
            />
          </Route>
          <Route path={MENU.CREATE_USER.path}>
            <UpsertUser handleUpsertUser={handleUpsertUser} user={user} />
          </Route>
        </Switch>
      </section>
    </article>
  )
}

export default Dashboard
