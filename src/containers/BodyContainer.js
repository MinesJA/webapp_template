import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import ToolCard from '../components/ToolCard'

const BodyContainer = (props) => {

  const renderTools = () => {
    return props.tools.map((tool, index)=>(
      <ToolCard key={`toolCard-${index}`} tool={tool} saved={props.saved}/>
    ))
  }

  return(
    <Grid stackable centered style={{padding: "15px"}}>
        {renderTools()}
    </Grid>
  )
}


export default BodyContainer;
