import { LOADING, ADD_TOOL, SELECT_TOOL, LOAD_TOOLS } from '../actions/toolsActions'


export default function Tools(state = {loading: false, tools: [], selectedTool: null}, action) {
  switch(action.type) {

    case LOADING:
      return Object.assign({}, state, {loading: !state.loading})

    case ADD_TOOL:
      return Object.assign({}, state, {tools: [...state, action.payload]})

    case SELECT_TOOL:
      return Object.assign({}, state, {selectedTool: action.payload})

    case LOAD_TOOLS:
      return Object.assign({}, state, {tools: [action.payload]})

    default:
      return {...state}
  }
}
