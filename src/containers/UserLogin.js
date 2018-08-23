import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

class UserLogin extends Component {
  state = {
    authorizeUrl: 'https://github.com/login/oauth/authorize',
    clientId: '573e899f8b478c26ac79',
    scope: 'user'
  }


  render() {
    let { authorizeUrl, clientId, scope } = this.state
    return (
      <Button type='click' value="github" href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}>Login with Github</Button>
    );
  }
}




export default UserLogin;
