export const ADD_TOOL = 'ADD_TOOL'
export const SELECT_TOOL = 'SELECT_TOOL'
export const LOADING = 'LOADING'
export const LOAD_TOOLS = 'LOAD_TOOLS'


export function fetchTools(){
  return (dispatch) => {
    dispatch({
      type: LOADING
    })

    return fetch('http://localhost:3090/api/v1/tools')
    .then(resp => resp.json())
    .then(result => {

      debugger;
      // When do I set loading back to false?
      dispatch({
      type: LOAD_TOOLS,
      payload
      })
    })
  }
}

export function addTool(tool){
  let options ={
    method: "PATCH",
    headers:
      {Accept: 'application/json',
       'Content-Type': 'application/json'},
    body:
      JSON.stringify({
      name: tool.name,
      description: tool.description,
      url: tool.url,
      tags: tool.tags
    })
  }

  return (dispatch) => {
    return fetch(`http://localhost:3090/api/v1/tools/${tool.id}`, options)
    .then(resp => resp.json())
    .then(result => {
      dispatch({
        type: 'ADD_TOOL',
        payload: result
      })
    })
  }

}

export function setLoading(){
  return {
    type: LOADING
  }
}

// export function addTool(tool){
//   return {
//     type: ADD_TOOL,
//     payload: tool
//   }
// }

export function selectTool(tool){
  return {
    type: SELECT_TOOL,
    payload: tool
  }
}
