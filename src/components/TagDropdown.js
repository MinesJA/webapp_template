import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addTag } from '../actions/tagsActions'
import { loader } from '../HOCs/loader'

class TagDropdown extends Component {
  state = {
    searchQuery: null,
    tagOptions: [],
    selectedTags: [],
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/tags')
      .then(resp => resp.json())
      .then(result => {

        let tagOptions = result.map((tag)=>{
          return this.formatTagObject(tag.name)
        })

        this.setState({tagOptions})
      })
  }

  formatTagObject = (tagName) => {
    return {"key": tagName, "text": tagName, "value": tagName.replace(/ /g,"_")}
  }

  handleAddition = (e, { value }) => {
    let newTagObject = this.formatTagObject(value)

    this.setState({
      tagOptions: [...this.state.tagOptions, newTagObject],
      selectedTags: [...this.state.selectedTags, value],
    })

    this.props.setTags(this.state.selectedTags)
  }

  handleChange = (e, { value }) => {
    this.setState({
      selectedTags: value
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
        options={this.state.tagOptions}
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
    tags: state.Tags.tags,
    loading: state.Tags.loading
  }
}

function mapDispatchToProps(dispatch){
  return {
    addTags: (tag)=>{
      dispatch(addTag(tag))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(loader(TagDropdown));
