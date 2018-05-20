import React, { Component } from 'react';
import { Segment, Header, Icon, Grid } from 'semantic-ui-react'
import ToolCard from '../components/ToolCard'
import { connect } from 'react-redux'
import { loader } from '../HOCs/loader'
import { fetchTools } from '../actions/toolsActions'

class BodyContainer extends Component{

  componentDidMount(){
    this.props.fetchTools(9)
  }

  renderTools = () => {
    console.log("RenderTools: ", this.props.tools)
    return this.props.tools.map((tool, index)=>(
      <ToolCard key={`toolCard-${index}`} tool={tool} />
      )
    )
  }

  render() {
    return(
      <Grid stackable centered>
          {this.renderTools()}
      </Grid>

    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchTools: (count) => {
      dispatch(fetchTools(count))
    }
  }
}

function mapStateToProps(state){
  return {
    tools: state.Tools.tools
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
