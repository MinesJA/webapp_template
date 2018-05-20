import React from 'react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'


const ToolCard = (props) => {
  console.log("ToolCard: ", props)
  let { name, description, user, url, tags, upvotes, downvotes,  } = props.tool

  const renderTags = () => (
    tags.map ((tag, index)=>(
      <Label as='a' size='tiny' key={`${name}-tag-${index}`}>{tag.name}</Label>
    ))
  )

  return(
    <Card>
      <Image src={window.location.origin + '/images/Square.jpg'} height={100}/>
      <Card.Content>
        <Card.Header as='h1'> <a href={url}> {name} </a></Card.Header>
        <Card.Meta>Created: Jan 8th, 2018</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Icon name='user' floated='left' />
          Posted By: {user.name}
        <Icon name='thumbs outline up' color={"green"} />
          {upvotes}
        <Icon name='thumbs outline up' color={"red"} />
          {downvotes}
        <br/>
        {renderTags()}

      </Card.Content>
    </Card>
  )
}




export default ToolCard
