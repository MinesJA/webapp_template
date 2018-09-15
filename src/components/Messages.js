import React, { Component } from 'react'
import BodyContainer from './BodyContainer'
import { connect } from 'react-redux'
import withAuth from '../HOCs/withAuth'
import loader from '../HOCs/loader'
import HeaderContainer from './HeaderContainer'
import { setCurrentUser } from '../actions/usersActions'

class SavedTools extends Component {

  componentDidMount(){
    this.props.setCurrentUser()
  }

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

function mapDispatchToProps(dispatch){
  return {
    setCurrentUser: () => {
      dispatch(setCurrentUser())
    }
  }
}


export default loader(withAuth(connect(mapStateToProps, mapDispatchToProps)(SavedTools)));
