import React, { Component } from 'react'
import BodyContainer from './BodyContainer'
import { connect } from 'react-redux'
import withAuth from '../HOCs/withAuth'
import loader from '../HOCs/loader'
import HeaderContainer from './HeaderContainer'

class SavedTools extends Component {

  render(){
    return(
      <div>
        <HeaderContainer savedTools/>
        <BodyContainer tools={this.props.currentUser.tools} saved/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.Users.currentUser
  }
}


export default loader(withAuth(connect(mapStateToProps)(SavedTools)));
