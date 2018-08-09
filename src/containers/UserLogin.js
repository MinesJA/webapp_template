import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

class UserLogin extends Component {

  handleClick = (e, { value }) => {
    console.log('hey')
  }

  render() {
    return (
      <Button type='click' value="github" onClick={this.handleClick}>Login with Github</Button>
    );
  }
}

export default UserLogin;
