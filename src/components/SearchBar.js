import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchTools } from '../actions/toolsActions'

import TagDropdown from './TagDropdown'


class SearchBar extends Component {
  state = {
    filterTags: [],
    searchTerm: ""
  }

  setTags = (tags) => {
    this.setState({
      filterTags: tags
    }, ()=>{console.log(this.state.filterTags)})
  }

  handleChange = (e, { value }) => {
    this.setState({
      searchTerm: value
    }, ()=>{console.log(this.state.searchTerm)})
  }

  render(){
    return(
      <div>
        <Input label='Find' placeholder='Styling tools' onChange={this.handleChange} />
        <TagDropdown chosenTags={this.state.tags} setTags={this.setTags} allowAdditions={false}/>
        <Button onClick={()=>{this.props.fetchTools(this.state)}}>Search</Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchTools: (searchObject) => {
      dispatch(fetchTools(searchObject))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
