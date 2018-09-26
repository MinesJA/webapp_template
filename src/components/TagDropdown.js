import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addFilterTags } from '../actions/searchActions'

class TagDropdown extends Component {
  state = {
    searchQuery: null,
    tagOptions: [],
    selectedTags: [],
  }

  handleAddition = (e, { value }) => {
    let newTagObject = this.formatTagObject(value)

    this.setState({
      tagOptions: [...this.state.tagOptions, newTagObject],
      selectedTags: [...this.state.selectedTags, value],
    }, ()=>{this.props.setTags(this.state.selectedTags)})
  }

  handleChange = (e, { value }) => {
    this.setState({
      selectedTags: value
    }, ()=>{
      this.props.setTags(this.state.selectedTags)
    })
  }

  handleSearchChange = (e, { searchQuery }) => {
    this.setState({
      searchQuery
    })
  }

  render(){
    return(
      <Dropdown
        selection
        allowAdditions={this.props.allowAdditions}
        multiple={true}
        search={true}
        options={this.props.tags}
        value={this.state.selectedTags}
        placeholder='Add tags'
        onChange={this.handleChange}
        onSearchChange={this.handleSearchChange}
        onAddItem={this.handleAddition}
      />
    )
  }
}


function mapStateToProps(state){
  return {
    tags: state.Tools.tags,
    loading: state.Tools.toolLoading
  }
}

function mapDispatchToProps(dispatch){
  return {
    addFilterTags: (tags) => {
      dispatch(addFilterTags(tags))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagDropdown);
