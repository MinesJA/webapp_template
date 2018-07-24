import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import { connect } from 'react-redux'
import { loader } from '../HOCs/loader'
import { fetchTags } from '../actions/tagsActions'



class HomeContainer extends Component {

  comonentDidMount(){
    this.props.fetchTags()
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <BodyContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchTags: () => {
      dispatch(fetchTags())
    }
  }
}


export default connect(null, mapDispatchToProps)(loader(HomeContainer));
