import { LOADING, ADD_USER, LOAD_USERS } from '../actions/usersActions'


export default function Users(state = {loading: false, users: []}, action){
  switch(action.type){
    case LOADING:
     return Object.assign({}, state, {loading: !state.loading})

    case ADD_USER:
      return Object.assign({}, state, {users: [...state, action.payload]})

    case LOAD_USERS:
      return Object.assign({}, state, {users: [action.payload]})

    default:
      return {...state}
  }
}
