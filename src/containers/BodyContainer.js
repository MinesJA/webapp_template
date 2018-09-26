import React from 'react';
import { Grid } from 'semantic-ui-react'
import ToolCard from '../components/ToolCard'
import loader from '../HOCs/loader'

const BodyContainer = (props) => {
  console.log(props)
  return(
    <Grid stackable centered style={{padding: "15px"}}>
        {props.tools.map((tool, index)=>(
          <ToolCard key={`toolCard-${index}`} tool={tool} saved={props.saved}/>
        ))}
    </Grid>
  )
}




export default loader(BodyContainer);
