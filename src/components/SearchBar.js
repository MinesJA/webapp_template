import React, { Component } from 'react'
import { Input, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addSearchTerm, addFilterTags } from '../actions/searchActions'
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
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addSearchTerm: (searchTerm) => {
      dispatch(addSearchTerm(searchTerm))
    },
    addFilterTags: (tags) => {
      dispatch(addFilterTags(tags))
    }
  }

}

export default connect(null, mapDispatchToProps)(SearchBar)
