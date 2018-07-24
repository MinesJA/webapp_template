import React, { Component } from 'react';
import { Segment, Header, Icon, Grid, Container } from 'semantic-ui-react'
import ToolCard from '../components/ToolCard'
import { connect } from 'react-redux'
import { loader } from '../HOCs/loader'
import { fetchTools } from '../actions/toolsActions'

class BodyContainer extends Component{

  renderTools = () => {

    console.log("Props - searchTerm: ", this.props.searchTerm)
    console.log("Props - filterTags: ", this.props.filterTags)


    return this.props.tools.map((tool, index)=>(
      <ToolCard key={`toolCard-${index}`} tool={tool} />
      )
    )
  }

  render() {
    return(
      <Grid stackable centered style={{padding: "15px"}}>
          {this.renderTools()}
      </Grid>
    )
  }
}



function mapStateToProps(state){
  return {
    searchTerm: state.Tags.searchTerm,
    tags: state.Tags.filterTags,
    tools: state.Tools.tools
  }
}

export default connect(mapStateToProps)(BodyContainer);
