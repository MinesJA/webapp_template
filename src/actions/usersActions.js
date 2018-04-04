export const ADD_USER = 'ADD_USER'
export const LOADING = 'LOADING'
export const LOAD_RESOURCES = 'LOAD_RESOURCES'


export function fetchUsers(){
  return (dispatch) => {
    dispatch({
      type: LOADING
    })

    return fetch('http://localhost:3090/api/v1/users')
    .then(resp => resp.json())
    .then(result => {

      debugger;
      // When do I set loading back to false?
      dispatch({
      type: LOAD_USERS,
      payload
      })
    })
  }
}

export function addUser(user){
  let options ={
    method: "PATCH",
    headers:
      {Accept: 'application/json',
       'Content-Type': 'application/json'},
    body:
      JSON.stringify({
      name: user.name,
    })
  }

  return (dispatch) => {
    return fetch(`http://localhost:3090/api/v1/users/${user.id}`, options)
    .then(resp => resp.json())
    .then(result => {
      dispatch({
        type: 'ADD_USER',
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
