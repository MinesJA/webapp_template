import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item name='home' as={NavLink} exact to="/" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='addTool' as={NavLink} exact to="/tools/new" active={activeItem === 'addTool'} onClick={this.handleItemClick} />
        <Menu.Item name='myTools' as={NavLink} exact to="/users/${id}/tools" active={activeItem === 'myTools'} onClick={this.handleItemClick} />

      </Menu>
    )
  }
}

export default NavBar
