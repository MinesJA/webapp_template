import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addFilterTags } from '../actions/searchActions'


class FilterBar extends Component{
  state = {
    value: [],
    searchQuery: "",
  }

  handleChange = (e, { value }) => this.setState({ value })
  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  renderOptions = () => {
    // takes an array of tags as strings from store and turns into objects
    return this.props.tags.map((tag)=>{
      let newTag = tag.replace(/ /g,"_");
      return {"key": tag, "text": tag, "value": newTag}
    })
  }

  render(){
    return(
      <Dropdown
        selection
        multiple={true}
        search={true}
        options={this.renderOptions()}
        value={this.state.values}
        placeholder='Select tags...'
        onChange={this.handleChange}
        onSearchChange={this.handleSearchChange}
      />
    )
  }
}


function mapStateToProps(state){
  return {
    tags: state.Tags.tags
  }
}

function mapDispatchToProps(dispatch){
  return {
    addFilters: (filterTags) => {
      dispatch(addFilterTags(filterTags))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
