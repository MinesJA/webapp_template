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

    return fetch('http://localhost:3000/api/v1/users')
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
    return fetch(`http://localhost:3000/api/v1/users`, options)
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

export function login(user = {}){
  return {
    type: LOGIN,
    payload: {
      user
    }
  };
};

export function logout(){
  return {
    type: LOGOUT
  }
};
