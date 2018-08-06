import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addSearchTerm } from '../actions/searchActions'
import TagDropdown from './TagDropdown'


class SearchBar extends Component {
  state = {
    tags: []
  }

  setTags = (tags) => {
    console.log("setTags: ", tags)
  }

  render(){
    return(
      <div>
        <Input label='Find' placeholder='Styling tools' onChange={(e)=>{this.props.addSearchTerm(e.target.value)}} />
        <TagDropdown chosenTags={this.state.tags} setTags={this.setTags} allowAdditions={false}/>
        <Button onClick={this.props.fetchTools}>Search</Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addSearchTerm: (searchTerm) => {
      dispatch(addSearchTerm(searchTerm))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
