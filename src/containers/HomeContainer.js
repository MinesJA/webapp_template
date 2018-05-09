import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import { connect } from 'react-redux'
import { loader } from '../HOCs/loader'
import { fetchTags } from '../actions/tagsActions'


class HomeContainer extends Component {

  componentDidMount = () => {
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
