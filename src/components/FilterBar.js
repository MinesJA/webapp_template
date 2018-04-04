import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addFilters } from '../actions'


const FilterBar = (props) => {

  let tagOptions = props.tags.map((option)=>{
    return {key: option, value: option}
  })

  const filterChange = (e) => {
    console.log(e.target.value)
  }


  return(
  <Dropdown placeholder='Select tags...' fluid multiple search selection options={tagOptions} onChange={filterChange}  />
  )
}


function mapStateToProps(state){
  return {
    tags: state.tags
  }
}

function mapDispatchToProps(dispatch){
  return {
    addFilters: (filters) => {
      dispatch(addFilters(filters))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
