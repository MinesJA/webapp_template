import React from 'react'
import { Card, Icon, Image, Label, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { saveTool, voteTool, removeSavedTool, addError } from '../actions/toolsActions'


const ToolCard = (props) => {
  let { isAuthenticated, tool, currentUser, saved, removeSavedTool, saveTool, addError, upVote, downVote } = props
  let { id, name, description, url, upvotes, downvotes, saves, author, tags } = tool

  const renderTags = () => (
    tags.map ((tag, index)=>(
      <Label as='a' size='small' key={`${name}-tag-${index}`}>{tag.name}</Label>
    ))
  )

  const handleClick = ({target}) => {

    if(isAuthenticated){
      switch(target.value || target.parentElement.value){
        case "save":
          saveTool({tool_id: id, user_id: currentUser.id})
          break;
        case "upvote":
          upVote(id)
          break;
        case "downvote":
          downVote(id)
          break;
        case "remove":
          removeSavedTool({tool_id: id, user_id: currentUser.id})
          break;
        default:
          console.log("Nothing clicked")
      }
    } else {
      addError({type: 401, message:"You are not signed in. You must be signed into vote or save."})
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
    },
    addError: (errorsArray) => {
      dispatch(addError(errorsArray))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolCard)
