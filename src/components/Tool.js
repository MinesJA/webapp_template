import React from 'react'
import { List, Label } from 'semantic-ui-react'



const Tool = ({id, posted_by, name, url, description, tags}) => {
  console.log("Tool: ", tags)

  const renderTags = tags.map( (tagg) => <Label as='a' tag>{tagg}</Label>)

  return( <List.Item>
            <List.Icon name={name} size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a'>{name}</List.Header>
              <List.Description as='a'>Posted by: {posted_by}</List.Description>
              <List.Description as='a'>{renderTags}</List.Description>
            </List.Content>
          </List.Item> )
}

export default Tool
