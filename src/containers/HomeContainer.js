import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import { addTool } from '../actions.js'
// COMPONENTS
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import Tool from '../components/Tool'
import ToolDisplay from '../components/ToolDisplay'
import ToolList from '../components/ToolList'

class HomeContainer extends Component {

  render() {
    console.log(this.props.tools)
    return (
      <div>
        {!this.props.selectedTool ? null :
        <ToolDisplay selectedTool={this.props.selectedTool}/> }
        <SearchBar />
        <FilterBar />
        <ToolList tools={this.props.tools}/>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    tools: state.tools,
    selectedTool: state.selectedTool
  }
}

export default connect(mapStateToProps)(HomeContainer);
