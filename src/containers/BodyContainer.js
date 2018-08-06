import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react'
import ToolCard from '../components/ToolCard'
import { connect } from 'react-redux'



class BodyContainer extends Component{


  renderTools = () => {
    let tools = [];
    if(this.props.filterTags.length > 0){
      console.log("Filter Tags Exist")

      this.props.tools.filter( (tool) => {
        tool.tags
      })

    }

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
    tags: state.Search.filterTags,
    tools: state.Tools.tools
  }
}

export default connect(mapStateToProps)(BodyContainer);
