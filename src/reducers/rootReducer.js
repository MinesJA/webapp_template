import { combineReducers } from 'redux'
import Users from './usersReducers'
import Tools from './toolsReducers'
import Search from './searchReducers'


const webApp = combineReducers({
  Search,
  Tools,
  Users,
})


export default toolsApp
