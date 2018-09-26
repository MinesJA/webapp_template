import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


 export function loader(component){
  return class Loader extends React.Component{

    render(){
      const Component = component
      return (
        this.props.loading ? <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </Segment> : <Component {...this.props}/>
      )
    }

  }
}

export default loader
