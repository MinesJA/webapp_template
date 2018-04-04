export const ADD_TAGS = 'ADD_TAG'
export const LOADING = 'LOADING'
export const LOAD_RESOURCES = 'LOAD_RESOURCES'


export function fetchTags(){
  return (dispatch) => {
    dispatch({
      type: LOADING
    })

    return fetch('http://localhost:3090/api/v1/tags')
    .then(resp => resp.json())
    .then(result => {

      debugger;
      // When do I set loading back to false?
      dispatch({
      type: LOAD_TAGS,
      payload
      })
    })
  }
}

export function addTags(tags){
  let options ={
    method: "PATCH",
    headers:
      {Accept: 'application/json',
       'Content-Type': 'application/json'},
    body:
      JSON.stringify({
      tags: tags
    })
  }

  return (dispatch) => {
    return fetch(`http://localhost:3090/api/v1/tags`, options)
    .then(resp => resp.json())
    .then(result => {
      dispatch({
        type: 'ADD_TAGS',
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
