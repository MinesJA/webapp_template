import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import { connect } from 'react-redux'


class HomeContainer extends Component {

  render() {
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
