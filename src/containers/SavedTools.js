import React, { Component } from 'react'
import BodyContainer from './BodyContainer'
import { connect } from 'react-redux'
// import withAuth from '../HOCs/withAuth'

class SavedTools extends Component {

  render(){
    return(
      <BodyContainer tools={this.props.currentUser.tools} saved/>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.Users.currentUser
  }
}


export default connect(mapStateToProps)(SavedTools);
