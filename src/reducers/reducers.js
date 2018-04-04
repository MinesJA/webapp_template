import { combineReducers } from 'redux'
import { ADD_TOOL,
        ADD_FILTERS,
        SELECT_TOOL,
        ADD_SEARCH_TERM,
        ADD_TAGS
} from './actions'

// default state =>
// {
//  tools: {},
//  selectedTool: "",
//  tags: ["", ""],
//  filterValues: ["", ""]
// }


function filters(state = [], action) {
  switch(action.type) {

    case ADD_FILTERS:
      return action.filters

    default:
      return state
  }
}

function tools(state = {loading: false, tools: [], selectedTool: null}, action) {
  switch(action.type) {

    case LOADING:
      return Object.assign({}, state, loading: !state.loading)

    case ADD_TOOL:
      return Object.assign({}, state, tools: [...state, action.payload])

    case SELECT_TOOL:
      return Object.assign({}, state, selectedTool: action.payload)

    default:
      return {...state}
  }
}

function tags(state = {loading: false, tags: []}, action){
  switch(action.type){
    case LOADING:
      return Object.assign({}, state, loading: !state.loading)

    case ADD_TAGS:
      return Object.assign({}, state, tags: [...state].concat(action.payload))

    default:
      return {...state}
  }
}

function users(state = {loading: false, users: []}, action){
  switch(action.type){
    case LOADING:
     return Object.assign({}, state, loading: !state.loading)

    case ADD_USER:
      return Object.assign({}, state, users: [...state, action.payload])

    

    default:
      return {...state}
  }


}

const toolsApp = combineReducers({
  tags,
  tools,
  users,



})

// ask about combineReducers and what best practices are for things like "filter" keys that only take a string


export default toolsApp
