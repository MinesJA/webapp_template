import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/usersActions';

class NavBar extends Component {
  state = {
    activeItem: 'home',
    authorizeUrl: 'https://github.com/login/oauth/authorize',
    clientId: '573e899f8b478c26ac79',
    scope: 'user'
    }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  renderLoginMenu = () => {

    if(this.props.isAuthenticated){
      return(
        <Menu.Menu position="right">
          <Menu.Item><img src={this.props.currentUser.avatar_url} alt='profile'/></Menu.Item>
          <Menu.Item name='logout' as={NavLink} exact to="/" onClick={this.props.logout} />
        </Menu.Menu>
      )
    }else{
      let { authorizeUrl, clientId, scope } = this.state
      return(
        <Menu.Menu position="right">
          <Button type='click' value="github" href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}>Login with Github</Button>
        </Menu.Menu>
      )
    }
  }

  render() {
    const { isAuthenticated } = this.props;
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
