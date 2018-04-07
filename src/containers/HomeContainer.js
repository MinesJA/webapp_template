import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import { fetchTools } from '../actions/toolsActions.js'
// COMPONENTS
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import Tool from '../components/Tool'
import ToolDisplay from '../components/ToolDisplay'
import ToolList from '../components/ToolList'

class HomeContainer extends Component {

  componentDidMount(){
    this.props.fetchTools()
  }

  render() {
    console.log(this.props.tools)
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
    selectedTool: state.Tools.selectedTool
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchTools: () => {
      dispatch(fetchTools())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
