export const ADD_TAG = 'ADD_TAG'
export const TAGS_LOADING = 'TAGS_LOADING'
export const LOAD_TAGS = 'LOAD_TAGS'


export function fetchTags(){
  return (dispatch) => {
    dispatch({
      type: TAGS_LOADING
    })

    return fetch('http://localhost:3000/api/v1/tags')
    .then(resp => resp.json())
    .then(result => {

      dispatch({
      type: LOAD_TAGS,
      payload: result
      })
    })

  }
}

export function addTag(tag){
  return {
    type: ADD_TAG,
    payload: tag
  }
}

// export function addTag(tags){
//   let options ={
//     method: "POST",
//     headers:
//       {Accept: 'application/json',
//        'Content-Type': 'application/json'},
//     body:
//       JSON.stringify({
//       tags: tags
//     })
//   }
//
//   return (dispatch) => {
//     return fetch(`http://localhost:3090/api/v1/tags`, options)
//     .then(resp => resp.json())
//     .then(result => {
//       dispatch({
//         type: 'ADD_TAGS',
//         payload: result
//       })
//     })
//   }
//
// }

export function setLoading(){
  return {
    type: TAGS_LOADING
  }
}
