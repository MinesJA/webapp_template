import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


const ToolDisplay = (props) => {
  let { name, description, posted_by, url, tags, upvotes, downvotes } = props.selectedTool

  return(
    <Card>
      <Card.Content/>
        <Card.Header> <a href={url}> {name} </a> </Card.Header>
        <Card.Description>{description}</Card.Description>
      <Card.Content/>
      <Card.Content extra>
        <Icon name='user' />
          {posted_by}
        <Icon name='tags' />
          {tags.join(", ")}
        <Icon name='thumbs outline up' color={"green"} />
          {upvotes}
        <Icon name='thumbs outline up' color={"red"} />
          {downvotes}
      </Card.Content>
    </Card>
  )
}





export default ToolDisplay
