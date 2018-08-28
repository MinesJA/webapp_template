import Adapter from '../Adapter';
export const USERS_LOADING = 'USERS_LOADING'
export const SELECT_USER = 'SELECT_USER'
export const LOGOUT = 'LOGOUT'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'


export function setCurrentUser(){
  return (dispatch) => {
    dispatch({type: USERS_LOADING})

    Adapter.fetchCurrentUser()
      .then(result => {
        console.log(result)
        dispatch({
          type: SET_CURRENT_USER,
          payload: result
        })
      })
  }
}

export function fetchUser(user_id){
  return (dispatch) => {
    dispatch({type: USERS_LOADING})

    Adapter.fetchUser(user_id)
      .then(result => {
        dispatch({
          type: SELECT_USER,
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
  localStorage.removeItem('token');

  return { type: LOGOUT }
};
