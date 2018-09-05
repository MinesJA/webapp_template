import React from 'react'
import { Card, Icon, Image, Label, Button, Message } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { saveTool, voteTool, removeSavedTool } from '../actions/toolsActions'


const ToolCard = (props) => {
  let { isAuthenticated, tool, currentUser, saved, removeSavedTool, saveTool } = props
  let { id, name, description, url, upvotes, downvotes, saves, author, tags } = tool


  const renderTags = () => (
    tags.map ((tag, index)=>(
      <Label as='a' size='small' key={`${name}-tag-${index}`}>{tag.name}</Label>
    ))
  )

  const handleClick = ({target}) => {

    if(isAuthenticated){
      let payload;

      switch(target.value || target.parentElement.value){
        case "save":
          payload = {tool_id: id, user_id: currentUser.id}
          saveTool(payload)
          break;
        case "upvote":
          // props.upVote()

          break;
        case "downvote":
          // props.downVote()
          break;
        case "remove":
          payload = {tool_id: id, user_id: currentUser.id};
          removeSavedTool(payload)

          console.log("Remove")
          break;
        default:
          console.log("Nothing clicked")
      }
    } else {
      alert("You must be signed in to vote or save")
    }
  }



  return(
    <div>
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
              {!!saved ?
                <Button
                  value='remove'
                  color="blue"
                  icon='minus'
                />
                :
                <Button
                  value='save'
                  content={saves}
                  color="blue"
                  icon='plus'
                />
              }
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
      <Message attached='bottom' warning>
        <Icon name='help' />
        Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
      </Message>
    </div>
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
    saveTool: (payload) => {
      dispatch(saveTool(payload))
    },
    upVote: (tool_id) => {
      dispatch(voteTool(tool_id, 1))
    },
    downVote: (tool_id) => {
      dispatch(voteTool(tool_id, -1))
    },
    removeSavedTool: (tool_id) => {
      dispatch(removeSavedTool(tool_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolCard)
