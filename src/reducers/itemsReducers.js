import {
  TOOLS_LOADING,
  ADD_ITEM,
  FETCH_ITEMS,
  SAVE_TOOL,
  ADD_ERROR,
  CLEAR_ERRORS,
  ADD_SUCCESS } from '../actions/itemsActions'


const initialState = {toolLoading: false, tools: [], tags: [], errors: []}


export default function Tools(state = initialState, action) {
  switch(action.type) {

    case ITEMS_LOADING:
      return Object.assign({}, state, {toolLoading: true})

    case ADD_ITEM:
      return Object.assign({}, state, {tools: [...state.tools, action.payload]})

    case FETCH_ITEMS:
      return Object.assign({}, state, {tools: action.payload, toolLoading: false})

    case SAVE_ITEM:
      let sIndex = state.tools.findIndex(item => item.id == action.payload)
      let sItem = Object.assign({}, state.tools[sIndex])
      let sToolsArray = [...state.tools]
      sItem.saves++
      sToolsArray.splice(sIndex, 1, sItem)

      return Object.assign({}, state, {tools: sToolsArray})

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
