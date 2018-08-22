export const ADD_USER = 'ADD_USER'
export const USERS_LOADING = 'USERS_LOADING'
export const FETCH_USERS = 'FETCH_USERS'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


export function fetchUsers(){
  return (dispatch) => {
    dispatch({
      type: USERS_LOADING
    })

    return fetch(`${process.env.REACT_APP_BACKEND_API}/users`)
    .then(resp => resp.json())
    .then(result => {

      dispatch({
        type: FETCH_USERS,
        payload: result
      })

    })
  }
}

export function addUser(user){

  let options = {
    method: "POST",
    headers:
      {Accept: 'application/json',
       'Content-Type': 'application/json'},
    body:
      JSON.stringify({
      name: user.name,
    })
  }

  return (dispatch) => {

    return fetch(`${process.env.REACT_APP_BACKEND_API}/users`, options)
    .then(resp => resp.json())
    .then(result => {

      dispatch({
        type: ADD_USER,
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

export function login(){

  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_BACKEND_API}/login`)
    .then(resp => resp.json())
    .then(result => {
      // Hit login route on users,
      // users sends back encrypted client_id,
      // ID is translated with JWT and used to redirect to github auth page
      // 

      debugger

    })
  }
};

export function logout(){
  return {
    type: LOGOUT
  }
};
