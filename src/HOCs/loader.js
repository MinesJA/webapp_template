import React from 'react'

function loader(component){
  return class BeefComponent extends React.Component{
    render(){
      const Component = component
      return (
        this.props.loaded ? <Component {...this.props}/> : <div>Loading</div>
      )

  }
}

export default loader
