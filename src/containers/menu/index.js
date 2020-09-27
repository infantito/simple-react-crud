import React, { useState } from 'react'
import { Button, Menu as Navigation } from 'antd'
import './style.scss'

const { Item } = Navigation

const Icon = props => {
  return (
    <span className="anticon" role="img">
      {props.icon}
    </span>
  )
}

const Menu = ({ options }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapse = () => {
    setIsCollapsed(prevState => !prevState)
  }

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
        className="menu-content"
      >
        {options.map((option, index) => (
          <Item key={index} icon={<Icon {...option} />}>
            <span>{option.text}</span>
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
