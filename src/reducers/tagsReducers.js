import { TAGS_LOADING, ADD_TAGS, LOAD_TAGS } from '../actions/tagsActions'



export default function Tags(state = {loading: false, tags: []}, action){
  switch(action.type){
    case TAGS_LOADING:
      return Object.assign({}, state, {loading: true})

    case ADD_TAGS:
      return Object.assign({}, state, {tags: [...state].concat(action.payload)})

    case LOAD_TAGS:
      return Object.assign({}, state, {tags: [action.payload], loading: false})

    default:
      return {...state}
  }
}
