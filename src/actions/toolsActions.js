export const ADD_TOOL = 'ADD_TOOL'
export const SELECT_TOOL = 'SELECT_TOOL'
export const TOOLS_LOADING = 'TOOLS_LOADING'
export const LOAD_TOOLS = 'LOAD_TOOLS'


export function fetchTools(){
  return (dispatch) => {
    dispatch({
      type: TOOLS_LOADING
    })

    return fetch('http://localhost:3000/api/v1/tools')
    .then(resp => resp.json())
    .then(result => {
      // When do I set loading back to false?
      debugger

      dispatch({
      type: LOAD_TOOLS,
      result
      })
    })
  }
}

export function addTool(tool){
  // debugger
  console.log({
  name: tool.name,
  posted_by: tool.posted_by,
  description: tool.description,
  url: tool.url,
  tags: tool.tags
})
  let options = {
    method: "POST",
    headers:
      {Accept: 'application/json',
       'Content-Type': 'application/json'},
    body:
      JSON.stringify({
        tool:
          {name: tool.name,
          posted_by: tool.posted_by,
          description: tool.description,
          url: tool.url,
          tag_strings: tool.tags}
      })
  }

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/tools/`, options)
    .then(resp => resp.json())
    .then(result => {

      alert(`Added ${result.name}!`)
    })
  }

}

export function setLoading(){
  return {
    type: TOOLS_LOADING
  }
}

export function selectTool(tool){
  return {
    type: SELECT_TOOL,
    payload: tool
  }
}
