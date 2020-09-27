import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Button, Menu as Navigation } from 'antd'
import { MENU } from 'utils'
import './style.scss'

const { Item } = Navigation

const Icon = props => {
  return (
    <span className="anticon" role="img">
      {props.icon}
    </span>
  )
}

const Menu = ({ options, history }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menu = Object.values(options)

  const match = useRouteMatch(`${MENU.USER.path}/:id`) || {}

  const handleCollapse = () => {
    setIsCollapsed(prevState => !prevState)
  }

  const { pathname } = history.location

  const selectedKeys = [
    match.params ? pathname.replace(`/${match.params.id}`, '') : pathname,
  ]

  return (
    <section className="menu">
      <Button
        type="primary"
        onClick={handleCollapse}
        className="menu-button"
        style={{ height: 50 }}
      >
        {isCollapsed ? '📬' : '📫'}
      </Button>
      <Navigation
        theme="dark"
        mode="inline"
        inlineCollapsed={isCollapsed}
        selectedKeys={selectedKeys}
        className="menu-content"
      >
        {menu.map(option => (
          <Item key={option.path} icon={<Icon {...option} />}>
            <Link to={option.path}>
              <span>{option.text}</span>
            </Link>
          </Item>
        ))}
        <Item key={options.length} icon={<Icon icon="🎉" />}>
          <span>Cerrar sesión</span>
        </Item>
      </Navigation>
    </section>
  )
}

export default Menu
