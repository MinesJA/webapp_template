import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


 function loader(Component){
   return function withLoading({loading, ...props}){
     if(!loading) return(<Component {...props}/>);
     return (<Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>)
   }
 }

 export default loader


//   return class Loader extends React.Component{
//     render(){
//       const Component = component
//       if(this.props.loading){
//         console.log("I'm loading")
//         return(
//
//         )
//       }else{
//         console.log("I'm NOT loading")
//         return()
//       }
//     }
//
//   }
// }

// export default loader
