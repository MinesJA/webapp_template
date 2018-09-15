import Adapter from '../Adapter';
export const ADD_TOOL = 'ADD_TOOL'
export const TOOLS_LOADING = 'TOOLS_LOADING'
export const FETCH_TAGS = 'FETCH_TAGS'
export const FETCH_TOOLS = 'FETCH_TOOLS'
export const SAVE_TOOL = 'SAVE_TOOL'
export const ADD_ERROR = 'ADD_ERROR'
export const ADD_SUCCESS = 'ADD_SUCCESS'

export function fetchTools(searchObject = {filterTags: [], searchTerm: ""}){
  let { filterTags, searchTerm } = searchObject

  return (dispatch) => {
    dispatch({type: TOOLS_LOADING})

    Adapter.fetchTools(filterTags, searchTerm)
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
    dispatch({type: TOOLS_LOADING})

    Adapter.fetchTags()
      .then(result => {

        let tagObjects = result.map((tag)=>{
          return {"id": tag.id, "key": tag.name, "text": tag.name, "value": tag.name.replace(/ /g,"_")}
        })

        dispatch({
          type: FETCH_TAGS,
          payload: tagObjects
        })
      })
  }
}

export function addTool(tool){

  return (dispatch) => {
    Adapter.addTool(tool)
      .then(result => {
        alert(`Added ${result.name}!`)
        // need to figure out what to do after this.
      })
  }
}

export function saveTool(payload){

  return (dispatch) => {
    Adapter.saveTool(payload)
      .then(result => {

        dispatch({type: SAVE_TOOL, payload: result.tool.id})
        alert(`Added ${result.tool.name}!`)
      })
      .catch((err)=>{
        // addError(["You've already saved that tool.", "You can only save a tool once."])
        dispatch({type: ADD_ERROR, payload: ["You've already saved that tool.", "You can only save a tool once."]})
        setTimeout(function(){
          dispatch({type: ADD_ERROR, payload: []})
        }, 2000);
      })
  }
}

export function voteTool(tool_id, upDown){

  return (dispatch) => {
    Adapter.voteTool(tool_id, upDown)
      .then(result => {
        alert(`Upvoted ${result.name}`)
      })
  }
}

export function removeSavedTool(payload){

  return (dispatch) => {

    Adapter.removeSavedTool(payload)
      .then(result => {
        debugger
        alert(`${result.name} removed from saved tools.`)
      })
  }
}

export function addError(payload){

  return (dispatch) => {
    dispatch({type: ADD_ERROR, payload: payload})
    setTimeout(function(){
      dispatch({type: ADD_ERROR, payload: []})
    }, 2000);
  }
}

export function addSuccess(payload){

  return (dispatch) => {
    dispatch({type: ADD_SUCCESS, payload: payload})
    setTimeout(function(){
      dispatch({type: ADD_SUCCESS, payload: []})
    }, 2000);
  }
}

export function setLoading(){
  return {
    type: TOOLS_LOADING
  }
}
