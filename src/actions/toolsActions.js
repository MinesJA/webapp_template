export const ADD_TOOL = 'ADD_TOOL'
export const SELECT_TOOL = 'SELECT_TOOL'
export const TOOLS_LOADING = 'TOOLS_LOADING'
export const FETCH_TAGS = 'FETCH_TAGS'
export const FETCH_TOOLS = 'FETCH_TOOLS'


export function fetchTools(searchObject = {filterTags: [], searchTerm: ""}){
  let { filterTags, searchTerm } = searchObject

  return (dispatch) => {
    dispatch({
      type: TOOLS_LOADING
    })

    return fetch(`${process.env.REACT_APP_BACKEND_API}/tools?tags=${filterTags}&searchTerm=${searchTerm}`)
    .then(resp => resp.json())
    .then(result => {
      
      dispatch({
      type: FETCH_TOOLS,
      payload: result
      })

    })
  }
}

export function fetchTags(){

  return (dispatch) => {
    dispatch({
      type: TOOLS_LOADING
    })

    return fetch(`${process.env.REACT_APP_BACKEND_API}/tags`)
    .then(resp => resp.json())
    .then(result => {

      dispatch({
      type: FETCH_TAGS,
      payload: result
      })

    })

  }
}

export function addTool(tool){

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
    return fetch(`${process.env.REACT_APP_BACKEND_API}/tools/`, options)
    .then(resp => resp.json())
    .then(result => {
      debugger

      // needs to render new tool page
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
