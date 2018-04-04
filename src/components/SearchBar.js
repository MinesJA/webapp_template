import React from 'react'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addSearchTerm } from '../actions.js'

const SearchBar = () => (

  <Input icon='search' placeholder='Search...' onChange={(e)=>{this.props.addSearchTerm(e.target.value)}} />

)

function mapDispatchToProps(dispatch){
  return {
    addSearchTerm: (searchTerm) => {
      dispatch(addSearchTerm(searchTerm))
    }
  }

}

export default connect(null, mapDispatchToProps)(SearchBar)
