import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import { connect } from 'react-redux'
import { loader } from '../HOCs/loader'
// import withAuth from '../HOCs/withAuth'

class HomeContainer extends Component {

  render() {
    return (
      <div>
        <HeaderContainer />
        <BodyContainer tools={this.props.tools} home/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    tools: state.Tools.tools
  }
}

export default connect(mapStateToProps)(HomeContainer);
