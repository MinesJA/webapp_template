export const ADD_USER = 'ADD_USER'
export const USERS_LOADING = 'USERS_LOADING'
export const LOAD_USERS = 'LOAD_USERS'


export function fetchUsers(){
  return (dispatch) => {
    dispatch({
      type: USERS_LOADING
    })

    return fetch('http://localhost:3090/api/v1/users')
    .then(resp => resp.json())
    .then(result => {

      debugger;
      // When do I set loading back to false?
      dispatch({
      type: LOAD_USERS,
      payload: result
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
    type: USERS_LOADING
  }
}


// export function addTool(tool){
//   return {
//     type: ADD_TOOL,
//     payload: tool
//   }
// }
