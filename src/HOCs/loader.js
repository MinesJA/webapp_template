import React from 'react'

export function loader(component){

  return class BeefComponent extends React.Component{

    render(){
      const Component = component
      return (
        this.props.loading ? <div>Loading</div> : <Component {...this.props}/>
      )
    }

  }
}
