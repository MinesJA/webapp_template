import React from 'react'
import Tool from './Tool'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import loader from '../HOCs/loader'


 const ToolList = ({ tools }) => {

   const renderTools = () => (

     tools.map((tool, index) => <Tool key={index} tool={tool} />)

   )

  return(
    <List divided relaxed>
      {renderTools}
    </List>
  )

}

function mapStateToProps(state){
  return {
    loading: state.Tools.loading
  }
}

export default connect(mapStateToProps)(loader(ToolList))
