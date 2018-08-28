import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react'
import ToolCard from '../components/ToolCard'


class BodyContainer extends Component{

  renderTools = () => {
    return this.props.tools.map((tool, index)=>(
      <ToolCard key={`toolCard-${index}`} tool={tool} saved={this.props.saved}/>
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





export default BodyContainer;
