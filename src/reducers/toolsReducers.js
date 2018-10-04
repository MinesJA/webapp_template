import { ADD_TOOL, ADD_TAG, TOOLS_LOADING, FETCH_TAGS, FETCH_TOOLS, SAVE_TOOL, VOTE_TOOL, ADD_ERROR, CLEAR_ERRORS, ADD_SUCCESS } from '../actions/toolsActions'


const initialState = {toolLoading: false, tools: [], tags: [], errors: []}


export default function Tools(state = initialState, action) {
  switch(action.type) {

    case TOOLS_LOADING:
      return Object.assign({}, state, {toolLoading: true})

    case ADD_TOOL:
      return Object.assign({}, state, {tools: [...state.tools, action.payload]})

    case ADD_TAG:
      return Object.assign({}, state, {tags: [...state.tags, action.payload]})

    case FETCH_TOOLS:
      return Object.assign({}, state, {tools: action.payload, toolLoading: false})

    case FETCH_TAGS:
      return Object.assign({}, state, {tags: action.payload, toolLoading: false})

    case SAVE_TOOL:
      let sIndex = state.tools.findIndex(item=>item.id == action.payload)
      let sItem = Object.assign({}, state.tools[sIndex])
      let sToolsArray = [...state.tools]
      sItem.saves++
      sToolsArray.splice(sIndex, 1, sItem)

      return Object.assign({}, state, {tools: sToolsArray})

    case VOTE_TOOL:
      let vIndex = state.tools.findIndex(item=>item.id == action.payload.tool_id)
      let vItem = Object.assign({}, state.tools[vIndex])
      let vToolsArray = [...state.tools]
      action.payload.upDown > 0 ? vItem.upvotes++ : vItem.downvotes++
      vToolsArray.splice(vIndex, 1, vItem)

      return Object.assign({}, state, {tools: vToolsArray})

    case ADD_ERROR:
      console.log("Incoming error: ", action.payload)
      return Object.assign({}, state, {errors: [...state.errors, action.payload], toolLoading: false})

    case CLEAR_ERRORS:
      return Object.assign({}, state, {errors: []})

    case ADD_SUCCESS:
      return Object.assign({}, state, {success: action.payload})

    default:
      return {...state}
  }
}
