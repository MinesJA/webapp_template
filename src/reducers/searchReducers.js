import { SEARCHES_LOADING, ADD_SEARCH_TERM, ADD_FILTER_TAGS  } from '../actions/tagsActions'

const initialState = {searchLoading: false, searchTerm: "", filterTags: []}


export default function Search(state = initialState, action){

  switch(action.type){

    case SEARCHES_LOADING:
      return Object.assign({}, state, {loading: true})

    case ADD_SEARCH_TERM:
      return Object.assign({}, state, {searchTerm: action.payload})

    case ADD_FILTER_TAGS:
      return Object.assign({}, state, {filterTags: [action.payload]})

    default:
      return {...state}
  }
}
