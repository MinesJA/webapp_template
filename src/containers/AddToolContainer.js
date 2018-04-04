import React, { Component } from 'react';
import { connect } from 'react-redux'


import { addTags } from '../actions/tagsActions'
import { addTool } from '../actions/toolsActions'
import { Form } from 'semantic-ui-react'
import TagInput from '../components/TagInput'
import { loader } from '../HOCs/loader'

class AddToolContainer extends Component {
  state = {
      posted_by: "",
      name: "",
      url: "",
      description: "",
      tags: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("sending state: ", this.state)
    this.props.addTool(this.state)
    this.props.history.push("/")
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, ()=>{console.log(this.state)})
  }

  setTags = (tags) => {
    console.log("At setTags: ", tags)
    this.setState({
      tags: tags
    }, ()=>{console.log("State set: ", this.state.tags)})
  }





  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input label="Name of Tool" placeholder='React.js' name='name' value={this.state.name} onChange={this.handleChange} />
          <Form.Input label='http://' placeholder='toolsite.com' name='url' value={this.state.url} onChange={this.handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Input label="Your Name" placeholder='Bob Bobbo' name='posted_by' value={this.state.posted_by} onChange={this.handleChange} />

        </Form.Group>


        <Form.TextArea label='Description of Tool' name='description' placeholder='React.js is super duper...' onChange={this.handleChange} />
        <TagInput setTags={this.setTags} chosenTags={this.state.tags}/>


        <Form.Button>Submit</Form.Button>

      </Form>
    );
  }
}



function mapDispatchToProps(dispatch){
  return{
    addTool: (tool) => {
      dispatch(addTool(tool))
    },
    addTags: (tags) => {
      dispatch(addTags(tags))
    }
  }
}

export default connect(null, mapDispatchToProps)(loader(AddToolContainer));
