import { USERS_LOADING, ADD_USER,  FETCH_USERS, LOGOUT, SET_CURRENT_USER } from '../actions/usersActions'


const initialState = {
  isAuthenticated: false,
  currentUser: {},
  loading: false,
  users: []
}

export default function Users(state = initialState, action){

  switch(action.type){
    case USERS_LOADING:
     return Object.assign({}, state, {loading: true})

    case ADD_USER:
      return Object.assign({}, state, {users: [...state, action.payload]})

    case FETCH_USERS:
      return Object.assign({}, state, {users: [action.payload], loading: false})

    case LOGOUT:
      return Object.assign({}, initialState)

    case SET_CURRENT_USER:
      return Object.assign({}, state, {isAuthenticated: true, currentUser: action.payload})

    default:
      return {...state}
  }

}
