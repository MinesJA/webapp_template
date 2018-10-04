import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addTag } from '../actions/toolsActions'

class TagDropdown extends Component {
  state = {
    searchQuery: null,
    tagOptions: [],
    selectedTags: [],
  }

  // formatTagObject = (tagName) => {
  //   return {"key": tagName, "text": tagName, "value": tagName.replace(/ /g,"_")}
  // }

  handleAddition = (e, { value }) => {
    // let newTagObject = this.formatTagObject(value)
    let id = this.props.tags[this.props.tags.length-1].id + 1
    let tagObject = {name: value, id: id}
    this.props.addTag(tagObject)
    // this.setState({
    //   tagOptions: [...this.state.tagOptions, newTagObject],
    //   selectedTags: [...this.state.selectedTags, value],
    // }, ()=>{
    //   console.log(this.state.selectedTags)
    //   this.props.setTags(this.state.selectedTags)
    // })
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
    addTag: (tagObject) => {
      dispatch(addTag(tagObject))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagDropdown);
