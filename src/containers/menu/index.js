import React, { useState } from 'react'
import { useHistory, Link, useRouteMatch } from 'react-router-dom'
import { Button, Menu as Navigation } from 'antd'
import { MENU, PUBLIC_ROUTES } from 'utils/constants'
import './style.scss'
import storage from 'utils/storage'

const { Item } = Navigation

const Icon = props => {
  return (
    <span className="anticon" role="img">
      {props.icon}
    </span>
  )
}

const Menu = props => {
  const history = useHistory()

  const match = useRouteMatch(`${MENU.PRODUCT.path}/:id`) || {}

  const [isCollapsed, setIsCollapsed] = useState(false)

  const menu = Object.values(MENU)

  const handleCollapse = () => {
    setIsCollapsed(prevState => !prevState)
  }

  const handleSignOut = () => {
    storage.clear()

    history.replace(PUBLIC_ROUTES.LOGIN)
  }

  const { pathname } = history.location

  const selectedKeys = [
    match.params ? pathname.replace(`/${match.params.id}`, '') : pathname,
  ]

  return (
    <section className="menu">
      <Button
        type="primary"
        className="menu-button"
        onClick={handleCollapse}
        style={{ height: 50 }}
      >
        {isCollapsed ? '📬' : '📫'}
      </Button>
      <Navigation
        theme="dark"
        mode="inline"
        inlineCollapsed={isCollapsed}
        className="menu-content"
        selectedKeys={selectedKeys}
      >
        {menu.map(option => {
          return (
            <Item key={option.path} icon={<Icon {...option} />}>
              <Link to={option.path}>{option.text}</Link>
            </Item>
          )
        })}
        <Item icon={<Icon icon="🚑" />} onClick={handleSignOut}>
          <span>Cerrar sesión</span>
        </Item>
      </Navigation>
    </section>
  )
}

export default Menu
