import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import { connect } from 'react-redux'
import loader from '../HOCs/loader'
// import withAuth from '../HOCs/withAuth'

// const BodyWithLoader = loader(List);

class HomeContainer extends Component {


  render() {
    console.log(this.props.loading)
    return (
      <div>
        <HeaderContainer />
        <BodyContainer tools={this.props.tools} loading={this.props.loading} home/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    tools: state.Tools.tools,
    errors: state.Tools.errors,
    loading: state.Tools.toolLoading
  }
}

export default connect(mapStateToProps)(HomeContainer);
