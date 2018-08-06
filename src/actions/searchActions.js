export const SEARCHES_LOADING = 'SEARCHES_LOADING'
export const ADD_SEARCH_TERM = 'ADD_SEARCH_TERM'
export const ADD_FILTER_TAGS = 'ADD_FILTER_TAGS'

export function addSearchTerm(searchTerm){
  return {
    type: ADD_SEARCH_TERM,
    payload: searchTerm
  }
}

export function setLoading(){
  return {
    type: SEARCHES_LOADING
  }
}

export function addFilterTags(filterTags){
  return {
    type: ADD_FILTER_TAGS,
    payload: filterTags
  }
}
