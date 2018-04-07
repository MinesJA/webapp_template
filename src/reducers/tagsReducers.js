import { LOADING, ADD_TAGS, LOAD_TAGS } from '../actions/tagsActions'



export default function Tags(state = {loading: false, tags: []}, action){
  switch(action.type){
    case LOADING:
      return Object.assign({}, state, {loading: !state.loading})

    case ADD_TAGS:
      return Object.assign({}, state, {tags: [...state].concat(action.payload)})

    case LOAD_TAGS:
      return Object.assign({}, state, {tags: [action.payload]})

    default:
      return {...state}
  }
}
