import React from 'react'
import { Card, Icon, Image, Label, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { saveTool, voteTool } from '../actions/toolsActions'


const ToolCard = (props) => {
  let { id, name, description, url, upvotes, downvotes, saves, author, tags } = props.tool

  const renderTags = () => (
    tags.map ((tag, index)=>(
      <Label as='a' size='small' key={`${name}-tag-${index}`}>{tag.name}</Label>
    ))
  )

  const handleClick = (e) => {

    if(props.isAuthenticated){
      switch(e.target.value){
        case "save":
          debugger
          // props.saveTool(props.tool.id)
          break;
        case "upvote":
          // props.upVote()
          break;
        case "downvote":
          // props.downVote()
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
              content={upvotes}
              color="green"
              icon='thumbs up'
            />
            <Button
              value='downvote'
              content={downvotes}
              color="red"
              icon='thumbs down'
            />

            <Button
              value='save'
              content={saves}
              color="blue"
              icon='plus'
            />

          </Button.Group>



        </Card.Meta>
        <Card.Description>{description}</Card.Description>

      </Card.Content>

      <Card.Content extra>
        <Icon name='user' floated='left' />
          Posted By: {author.name}

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
    upVote: (tool_id) => {
      dispatch(voteTool(tool_id, 1))
    },
    downVote: (tool_id) => {
      dispatch(voteTool(tool_id, -1))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToolCard)
