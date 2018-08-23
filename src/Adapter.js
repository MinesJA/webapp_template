
function getToken() {
  return localStorage.getItem('token');
}

function authorizationHeader() {
  return {headers: { Authorization: getToken() }}
}


export default class Adapter{

  static fetchCurrentUser(options){
    return fetch(`${process.env.REACT_APP_BACKEND_API}/current_user`, {headers: {Authorization: getToken()}})
      .then(resp => resp.json())
  }

  static fetchUser(user_id){
    return fetch(`${process.env.REACT_APP_BACKEND_API}/user/${user_id}`)
      .then(resp => resp.json())
  }

  static fetchTools(filterTags, searchTerm){
    return fetch(`${process.env.REACT_APP_BACKEND_API}/tools?tags=${filterTags}&searchTerm=${searchTerm}`)
      .then(resp => resp.json())
  }

  static fetchTags(){
    return fetch(`${process.env.REACT_APP_BACKEND_API}/tags`)
      .then(resp => resp.json())
  }

  static addTool({name, posted_by, description, url, tags}){

    let options = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization: getToken()
       },
      body:
        JSON.stringify({
          tool: {
            name: name,
            posted_by: posted_by,
            description: description,
            url: url,
            tag_strings: tags
          }
        })
    }

    return fetch(`${process.env.REACT_APP_BACKEND_API}/tools/`, options)
      .then(resp => resp.json())
  }

  static saveTool(tool_id){

    let options = {
      method: 'PATCH',
      headers: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization: getToken()
       },
      body: JSON.stringify({tool: {tool_id}})
    }

    return fetch(`${process.env.REACT_APP_BACKEND_API}/tool/${tool_id}`, options)
      .then(resp => resp.json())
  }

  static voteTool(tool_id, upDown){

    let options = {
      method: 'PATCH',
      headers: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization: getToken()
       },
      body: JSON.stringify({tool: {upDown}})
    }

    return fetch(`${process.env.REACT_APP_BACKEND_API}/tool/${tool_id}`, options)
  }







  static getQueryParams(){
    const query = window.location.search.substring(1);

    if(!!query){
      const pairs = query.split('&').map((str) => str.split('='));

      return pairs.reduce((memo, pair) => {
        memo[pair[0]] = pair[1];
        return memo;
      }, {});
    }else{
      return null
    }
  }




}






export const getQueryParams = () => {

}

const getWithToken = url => {
  const token = localStorage.getItem('token');

  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
}

export const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`)
}

// export const adapter = {
//   auth: {
//     getCurrentUser,
//     getQueryParams
//   }
// }
