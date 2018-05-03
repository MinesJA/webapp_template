import React from 'react'
import { List, Label } from 'semantic-ui-react'



const Tool = (props) => {
  console.log("TOOL: ", props)

  const renderTags = props.tool.tags.map( (tagg) => <Label as='a' tag>{tagg}</Label>)

  return( <List.Item>
            <List.Icon name={props.tool.name} size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a'>{props.tool.name}</List.Header>
              <List.Description as='a'>Posted by: {props.tool.posted_by}</List.Description>
              {props.tool.tags ? <List.Description as='a'>{props.tool.renderTags}</List.Description> : null}
            </List.Content>
          </List.Item> )
}


export default Tool
