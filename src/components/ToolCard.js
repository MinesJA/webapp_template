import React from 'react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'


const ToolCard = (props) => {
  let { name, description, user, url, tags, upvotes, downvotes,  } = props.tool

  const renderTags = () => (
    tags.map ((tag, index)=>(
      <Label as='a' size='small' key={`${name}-tag-${index}`}>{tag.name}</Label>
    ))
  )

  return(
    <Card style={{margin:"10px"}}>
      <Image src={window.location.origin + '/images/Square.jpg'} height={100}/>
      <Card.Content>
        <Card.Header as='h1'> <a href={url}> {name} </a></Card.Header>
        <Card.Meta>

          <Label color="yellow">
            <Icon name='thumbs up' color={"green"} size="large" style={{marginRight:"5px"}}/>
            {upvotes}
          </Label>


          <Label color="yellow">
            {downvotes}
            <Icon name='thumbs down' color={"red"} size="large" style={{marginLeft:"5px"}}/>
          </Label>

        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Icon name='user' floated='left' />
          Posted By: {user.name}

        <br/>

        {renderTags()}

      </Card.Content>
    </Card>
  )
}




export default ToolCard
