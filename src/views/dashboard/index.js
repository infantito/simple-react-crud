import React, { useState } from 'react'
import { Switch, useHistory } from 'react-router-dom'
import { Menu, Table, PrivateRoute } from 'containers'
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

  const history = useHistory()

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
    } else {
      // CREATE
      // NOTE: Don't do array.push(value)
      setUsers(prevState => {
        // Base36 = hexatridecimal
        const key = Date.now().toString(36)

        return [...prevState, { ...user, key }]
      })
    }

    history.push(MENU.DASHBOARD.path)
  }

  const handleEdit = record => () => {
    setUser(record)

    return history.push(`${MENU.USER.path}/${record.key}`)
  }

  const handleDelete = record => () => {
    setUsers(prevState => {
      return prevState.filter(item => item.key !== record.key)
    })
  }

  return (
    <article className="container">
      <section className="container-menu">
        <Menu options={MENU} history={history} />
      </section>
      <section className="container-content">
        <Switch>
          <PrivateRoute exact={true} path={MENU.DASHBOARD.path}>
            <Table
              columns={getColumns({ handleEdit, handleDelete })}
              dataSource={formatUsers(users)}
            />
          </PrivateRoute>
          <PrivateRoute exact={true} path={MENU.USER.path}>
            <UpsertUser handleUpsertUser={handleUpsertUser} />
          </PrivateRoute>
          <PrivateRoute path={`${MENU.USER.path}/:id`}>
            <UpsertUser handleUpsertUser={handleUpsertUser} user={user} />
          </PrivateRoute>
        </Switch>
      </section>
    </article>
  )
}

export default Dashboard
