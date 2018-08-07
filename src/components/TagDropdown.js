import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loader } from '../HOCs/loader'
import { addFilterTags } from '../actions/searchActions'

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
    }, ()=>{this.props.setTags(this.state.selectedTags)})
  }

  handleChange = (e, { value }) => {
    this.setState({
      selectedTags: value
    }, ()=>{
      console.log(this.state.selectedTags)
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

export default connect(mapStateToProps, mapDispatchToProps)(loader(TagDropdown));
