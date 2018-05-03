import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import { fetchTools } from '../actions/toolsActions.js'
import { fetchTags } from '../actions/tagsActions.js'
// COMPONENTS
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import Tool from '../components/Tool'
import ToolDisplay from '../components/ToolDisplay'
import ToolList from '../components/ToolList'
import loader from '../HOCs/loader'

class HomeContainer extends Component {

  componentDidMount(){
    this.props.fetchTags()
    this.props.fetchTools()
  }

  render() {
    return (
      <div>
        {this.props.selectedTool ? <ToolDisplay selectedTool={this.props.selectedTool}/> : null}
        <SearchBar />
        <FilterBar />
        <ToolList tools={this.props.tools}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    tools: state.Tools.tools,
    selectedTool: state.Tools.selectedTool,
    loading: state.Tags.loading || state.Tools.loading
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchTools: () => {
      dispatch(fetchTools())
    },
    fetchTags: () => {
      dispatch(fetchTags())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(loader(HomeContainer));
