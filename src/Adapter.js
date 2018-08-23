const API_ROOT = 'http://localhost:3000/api/v1'


export const getQueryParams = () => {
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
