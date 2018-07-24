import { combineReducers } from 'redux'
import Users from './usersReducers'
import Tools from './toolsReducers'
import Search from './searchReducers'


const toolsApp = combineReducers({
  Search,
  Tools,
  Users,
})


export default toolsApp
