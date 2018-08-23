import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logout = () => {

  }

  renderLoginMenu = () => {
    if(this.props.isAuthenticated){
      return(
        <Menu.Menu position="right">
          <Menu.Item name='logout' as={NavLink} exact to="/" active={activeItem === 'logout'} onClick={this.logout} />
        </Menu.Menu>
      )
    }else{
      return(
        <Menu.Menu position="right">
          <Menu.Item><img src="https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"</Menu.Item>
          <Menu.Item name='login' as={NavLink} exact to="/login" active={activeItem === 'login'} onClick={this.handleItemClick} />}
        </Menu.Menu>
      )
    }
  }



  render() {
    const { isAuthenticated, currentUser } = this.props;
    console.log("Get Token:", localStorage.getItem('token'))

    let token = localStorage.getItem('token')
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item name='home' as={NavLink} exact to="/" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='addTool' as={NavLink} exact to="/tools/new" active={activeItem === 'addTool'} onClick={this.handleItemClick} />
        <Menu.Item name='myTools' as={NavLink} exact to="/tools" active={activeItem === 'myTools'} onClick={this.handleItemClick} />
        <Menu.Menu position="right">
        {isAuthenticated ?


          :


        </Menu.Menu>
      </Menu>
    )
  }
}

function mapStateToProps(state){
  return {
    isAuthenticated: state.Users.isAuthenticated,
    currentUser: state.Users.currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
