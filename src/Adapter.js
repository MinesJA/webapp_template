const getToken = () => (localStorage.getItem('token'));


export default class Adapter{

  static errorHandling(response){
    if(!response.ok){
      switch(response.status){
        case 500:
          throw {status: 500, message: "Could not get a response from the server"}
          break;
        case 406:
          throw {status: 406, message: "You've already saved that tool. You can only save a tool once."}
        break;
        default:
          debugger
      }
    }else{
      return response.json()
    }
  }

  static fetchCurrentUser(options){
    return fetch(`${process.env.REACT_APP_BACKEND_API}/current_user`, {headers: {Authorization: getToken()}})
      .then(response => Adapter.errorHandling(response) )
  }

  static fetchUser(user_id){
    return fetch(`${process.env.REACT_APP_BACKEND_API}/user/${user_id}`)
      .then(response => Adapter.errorHandling(response) )
  }

  static fetchTools(filterTags, searchTerm){
    return fetch(`${process.env.REACT_APP_BACKEND_API}/tools?tags=${filterTags}&search_term=${searchTerm}`)
      .then(response => Adapter.errorHandling(response) )
  }

  static fetchTags(){
    return fetch(`${process.env.REACT_APP_BACKEND_API}/tags`)
    .then(response => Adapter.errorHandling(response) )
  }

  static addTool({author_id, name, description, url, tags}){
    let options = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization: getToken()
       },
      body:
        JSON.stringify({
          name: name,
          description: description,
          url: url,
          tag_strings: tags
        })
    }

    return fetch(`${process.env.REACT_APP_BACKEND_API}/users/${author_id}/tools/`, options)
      .then(response => Adapter.errorHandling(response) )
  }

  static saveTool({tool_id, user_id}){
    let options = {
      method: 'PATCH',
      headers: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization: getToken()
       },
      body: JSON.stringify({id: tool_id})
    }

    return fetch(`${process.env.REACT_APP_BACKEND_API}/users/${user_id}/tools/${tool_id}/save`, options)
      .then(response => Adapter.errorHandling(response) )
  }

  static voteTool(tool_id, upDown){

    let options = {
      method: 'PATCH',
      headers: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization: getToken()
       },
      body: JSON.stringify({upDown})
    }

    return fetch(`${process.env.REACT_APP_BACKEND_API}/tools/${tool_id}`, options)
      .then(response => Adapter.errorHandling(response) )
  }

  static removeSavedTool({tool_id, user_id}){
    let options = {
      method: 'DELETE',
      headers: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization: getToken()
       }
    }

    return fetch(`${process.env.REACT_APP_BACKEND_API}/users/${user_id}/tools/${tool_id}`, options)
      .then(response => Adapter.errorHandling(response) )
  }


  static getQueryParams(){
    const query = window.location.search.substring(1);

    if(!!query){
      const pairs = query.split('&').map((str) => str.split('='));

      return pairs.reduce((memo, pair) => {
        memo[pair[0]] = pair[1];
        return memo;
      }, {});
    } else {
      return null
    }
  }

}
