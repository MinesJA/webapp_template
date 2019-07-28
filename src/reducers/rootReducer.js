import { combineReducers } from 'redux'
import Users from './usersReducers'
import Items from './itemsReducers'
import Search from './searchReducers'


const webApp = combineReducers({
  Search,
  Items,
  Users,
})


export default webApp
