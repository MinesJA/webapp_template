import React from 'react'
import { Card, Icon, Image, Label, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { saveTool, upvoteTool, downvoteTool } from '../actions/tools'


const ToolCard = (props) => {
  let { name, description, user, url, tags, upvotes, downvotes,  } = props.tool

  const renderTags = () => (
    tags.map ((tag, index)=>(
      <Label as='a' size='small' key={`${name}-tag-${index}`}>{tag.name}</Label>
    ))
  )

  const handleClick = (e) => {

    if(props.isAuthenticated){
      switch(e.target.value){
        case "save":

          break;
        case "upvote":

          break;
        case "downvote":

          break;
        default:
          console.log("Nothing clicked")
      }
    } else {
      alert("You must be signed in to vote or save")
    }

  }







  return(
    <Card style={{margin:"10px"}}>
      <Image src={window.location.origin + '/images/Square.jpg'} height={100}/>
      <Card.Content>
        <Card.Header as='h1'> <a href={url}> {name} </a> </Card.Header>
        <Card.Meta>

          <Button.Group size="tiny" onClick={handleClick}>
            <Button
              value='upvote'
              content='45'
              color="green"
              icon='thumbs up'
            />
            <Button
              value='downvote'
              content='36'
              color="red"
              icon='thumbs down'
            />

            <Button
              value='save'
              content='56'
              color="blue"
              icon='plus'
            />

          </Button.Group>



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

function mapStateToProps(state){
  return {
    isAuthenticated: state.Users.isAuthenticated,
    currentUser: state.Users.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    saveTool: (tool_id) => {
      dispatch(saveTool(tool_id))
    },
    upvote: (tool_id) => {
      dispatch(upvote(tool_id))
    },
    downvote: (tool_id) => {
      dispatch(downvote(tool_id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToolCard)
