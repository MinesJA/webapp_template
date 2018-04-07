import React from 'react'
import Tool from './Tool'
import { List } from 'semantic-ui-react'


 const ToolList = ({ tools }) => {

  const renderTools = tools.map((tool, index) => (
    <Tool key={index} tool={tool} />
    )
  )

  return(
    <List divided relaxed>
      {renderTools}
    </List>
  )
  
}

export default ToolList
