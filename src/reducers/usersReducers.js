import { USERS_LOADING, SELECT_USER, LOGOUT, SET_CURRENT_USER } from '../actions/usersActions'


const initialState = {
  isAuthenticated: false,
  currentUser: {},
  loading: false,
  selectedUser: []
}

export default function Users(state = initialState, action){

  switch(action.type){
    case USERS_LOADING:
     return Object.assign({}, state, {loading: true})

    case SELECT_USER:
      return Object.assign({}, state, {selectedUser: action.payload, loading: false})

    case LOGOUT:
      return Object.assign({}, initialState)

    case SET_CURRENT_USER:
      return Object.assign({}, state, {isAuthenticated: true, currentUser: action.payload, loading: false})

    default:
      return {...state}
  }

}
