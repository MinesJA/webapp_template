export const ADD_TOOL = 'ADD_TOOL'
export const ADD_FILTERS = 'ADD_FILTERS'
export const SELECT_TOOL = 'SELECT_TOOL'
export const ADD_SEARCH_TERM = 'ADD_SEARCH_TERM'
export const ADD_TAGS = 'ADD_TAGS'


export function addTool(tool){
  console.log("At addTool: ", tool)
  return {
    type: ADD_TOOL,
    payload: tool
  }
}

export function addTags(tags){
  console.log("At addTags: ", tags)
  return {
    type: ADD_TAGS,
    payload: tags
  }
}

export function addFilters(filters){
  return {
    type: ADD_FILTERS,
    payload: filters
  }
}

export function selectTool(tool){
  return {
    type: SELECT_TOOL,
    payload: tool
  }
}

export function addSearchTerm(searchTerm){
  return {
    type: ADD_SEARCH_TERM,
    payload: searchTerm
  }
}

export
