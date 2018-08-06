import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react'
import ToolCard from '../components/ToolCard'
import { connect } from 'react-redux'



class BodyContainer extends Component{

  renderTools = () => {
    return this.props.tools.map((tool, index)=>(
      <ToolCard key={`toolCard-${index}`} tool={tool} />
    ))
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
    filterTags: state.Search.filterTags,
    searchTerm: state.Search.searchTerm,
    tools: state.Tools.tools
  }
}

export default connect(mapStateToProps)(BodyContainer);
