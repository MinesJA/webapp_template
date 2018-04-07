import { LOADING, ADD_SEARCH_TERM, ADD_FILTER_TAGS } from '../actions/searchActions'

const initialState = {loading: false, searchTerm: "", filterTags: []}


export default function Tags(state = initialState, action){
  switch(action.type){
    case LOADING:
      return Object.assign({}, state, {loading: !state.loading})

    case ADD_SEARCH_TERM:
      return Object.assign({}, state, {searchTerm: action.payload})

    case ADD_FILTER_TAGS:
      return Object.assign({}, state, {filterTags: [action.payload]})

    default:
      return {...state}
  }
}
