import { TOOLS_LOADING, ADD_TOOL, SELECT_TOOL, LOAD_TOOLS } from '../actions/toolsActions'


export default function Tools(state = {loading: false, tools: [], selectedTool: null}, action) {
  switch(action.type) {

    case TOOLS_LOADING:
      return Object.assign({}, state, {loading: true})

    case ADD_TOOL:
      return Object.assign({}, state, {tools: [...state, action.payload]})

    case SELECT_TOOL:
      return Object.assign({}, state, {selectedTool: action.payload})

    case LOAD_TOOLS:
      return Object.assign({}, state, {tools: action.payload, loading: false})

    default:
      return {...state}
  }
}
