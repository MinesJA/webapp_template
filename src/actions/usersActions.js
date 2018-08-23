export const ADD_USER = 'ADD_USER'
export const USERS_LOADING = 'USERS_LOADING'
export const FETCH_USERS = 'FETCH_USERS'
export const LOGOUT = 'LOGOUT'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

// process.env.REACT_APP_BACKEND_API

export function setCurrentUser(){
  return (dispatch) => {
    dispatch({
      type: USERS_LOADING
    })

    const token = localStorage.getItem('token');
    const options = {headers: { Authorization: token }}

    return fetch(`${process.env.REACT_APP_BACKEND_API}/current_user`, options)
      .then(resp => resp.json())
      .then(result => {

        dispatch({
          type: SET_CURRENT_USER,
          payload: result
        })
      })
  }
}


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

export function logout(){
  console.log("In Logout")
  localStorage.removeItem('token');

  return { type: LOGOUT }
};
