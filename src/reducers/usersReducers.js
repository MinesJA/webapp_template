import { USERS_LOADING, ADD_USER,  FETCH_USERS } from '../actions/usersActions'


export default function Users(state = {loading: false, users: []}, action){

  switch(action.type){
    case USERS_LOADING:
     return Object.assign({}, state, {loading: true})

    case ADD_USER:
      return Object.assign({}, state, {users: [...state, action.payload]})

    case FETCH_USERS:
      return Object.assign({}, state, {users: [action.payload], loading: false})

    default:
      return {...state}
  }

}
