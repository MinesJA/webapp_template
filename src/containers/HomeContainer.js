import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import { connect } from 'react-redux'
import { loader } from '../HOCs/loader'
import { fetchTags } from '../actions/toolsActions'



class HomeContainer extends Component {


  render() {
    return (
      <div>
        <HeaderContainer />
        <BodyContainer />
      </div>
    );
  }
}

export default loader(HomeContainer);
