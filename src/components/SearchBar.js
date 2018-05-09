import React, { Component } from 'react'
import { Input, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addSearchTerm } from '../actions/searchActions'
import TagDropdown from './TagDropdown'


class SearchBar extends Component {
  state = {
    tags: []
  }

  setTags = (tags) => {
    this.setState({
      tags
    })
  }

  render(){
    return(
      <div>
        SEARCH BAR
        <Input label='I need...' placeholder='Styling tool' onChange={(e)=>{this.props.addSearchTerm(e.target.value)}} />
        <TagDropdown chosenTags={this.state.tags} setTags={this.setTags} allowAdditions={false}/>
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
