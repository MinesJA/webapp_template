import Adapter from '../Adapter';
export const ITEMS_LOADING = 'ITEMS_LOADING'
export const ADD_ITEM = 'ADD_ITEM'
export const FETCH_ITEMS = 'FETCH_ITEMS'
export const SAVE_TOOL = 'SAVE_ITEM'
export const ADD_ERROR = 'ADD_ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const ADD_SUCCESS = 'ADD_SUCCESS'

export function fetchItems(searchObject = {filterTags: [], searchTerm: ""}){
  let { filterTags, searchTerm } = searchObject

  return (dispatch) => {
    dispatch({type: ITEMS_LOADING})

    Adapter.fetchTools(searchTerm)
      .then(result => {
        dispatch({
          type: FETCH_ITEMS,
          payload: result
        })
      })
      .catch((error)=>{
        dispatch({
          type: ADD_ERROR,
          payload: error
        })
      })
  }
}

export function addItem(item){

  return (dispatch) => {
    Adapter.addTool(tool)
      .then(result => {
        alert(`Added ${result.name}!`)
      })
      .catch((error)=>{
        dispatch({
          type: ADD_ERROR,
          payload: error
        })

        setTimeout(function(){
          dispatch({type: CLEAR_ERRORS})
        }, 2000)
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
      .catch((error)=>{
        dispatch({
          type: ADD_ERROR,
          payload: error
        })

        setTimeout(function(){
          dispatch({type: CLEAR_ERRORS})
        }, 2000)
      })
  }
}

export function voteTool(tool_id, upDown){

  return (dispatch) => {
    Adapter.voteTool(tool_id, upDown)
      .then(result => {
        dispatch({type: 'VOTE_TOOL', payload: {tool_id, upDown}})
        upDown > 0 ? alert(`Upvoted ${result.name}`) : alert(`Downvoted ${result.name}`)
      })
      .catch((error)=>{
        dispatch({
          type: ADD_ERROR,
          payload: error
        })

        setTimeout(function(){
          dispatch({type: CLEAR_ERRORS})
        }, 2000)
      })
  }
}

export function removeSavedTool(payload){

  return (dispatch) => {

    Adapter.removeSavedTool(payload)
      .then(result => {
        alert(`${result.name} removed from saved tools.`)
      })
      .catch((error)=>{
        dispatch({
          type: ADD_ERROR,
          payload: error
        })

        setTimeout(function(){
          dispatch({type: CLEAR_ERRORS})
        }, 2000)
      })
  }
}

export function addTag(tag){
  debugger
  let tagObject = {"id": tag.id, "key": tag.name, "text": tag.name, "value": tag.name.replace(/ /g,"_")}
  debugger

  return (dispatch) => {
    dispatch({type: ADD_TAG, payload: tagObject})
  }
}

export function addError(payload){

  return (dispatch) => {
    dispatch({type: ADD_ERROR, payload: payload})

    setTimeout(function(){
      dispatch({type: CLEAR_ERRORS})
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
