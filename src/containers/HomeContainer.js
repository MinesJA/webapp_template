import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import { connect } from 'react-redux'
import { loader } from '../HOCs/loader'
import { fetchTags } from '../actions/toolsActions'



class HomeContainer extends Component {


  render() {
    console.log("Currently in environment: ", process.env.REACT_APP_ENVIRONMENT)
    return (
      <div>
        <HeaderContainer />
        <BodyContainer />
      </div>
    );
  }
}

export default loader(HomeContainer);
