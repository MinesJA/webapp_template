import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/usersActions';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  renderLoginMenu = () => {

    if(this.props.isAuthenticated){
      return(
        <Menu.Menu position="right">
          <Menu.Item><img src={this.props.currentUser.avatar_url}/></Menu.Item>
          <Menu.Item name='logout' as={NavLink} exact to="/" onClick={this.props.logout} />
        </Menu.Menu>
      )
    }else{
      return(
        <Menu.Menu position="right">
          <Menu.Item name='login' as={NavLink} exact to="/login" onClick={this.handleItemClick} />
        </Menu.Menu>
      )
    }


  }

  render() {
    const { isAuthenticated, currentUser } = this.props;
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item name='home' as={NavLink} exact to="/" active={activeItem === 'home'} onClick={this.handleItemClick} />
        {isAuthenticated ? <Menu.Item name='addTool' as={NavLink} exact to="/tools/new" active={activeItem === 'addTool'} onClick={this.handleItemClick} /> : null}
        {isAuthenticated ? <Menu.Item name='myTools' as={NavLink} exact to="/tools" active={activeItem === 'myTools'} onClick={this.handleItemClick} /> : null}

        {this.renderLoginMenu()}

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

function mapDispatchToProps(dispatch){
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
