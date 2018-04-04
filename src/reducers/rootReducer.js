import { combineReducers } from 'redux'
import Users from './usersReducers'
import Tool from './toolsReducers'
import Tags from './tagsReducers'


const toolsApp = combineReducers({
  Tags,
  Tools,
  Users,
})


export default toolsApp
