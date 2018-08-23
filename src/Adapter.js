const API_ROOT = 'http://localhost:3000/api/v1'


const getQueryParams = () => {
  const query = window.location.search.substring(1);

  const pairs = query.split('&').map((str) => str.split('='));

  return pairs.reduce((memo, pair) => {
    memo[pair[0]] = pair[1];
    return memo;
  }, {});
}

const getWithToken = url => {
  const token = localStorage.getItem('token');

  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
}

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`)
}

export const adapter = {
  auth: {
    getCurrentUser,
    getQueryParams
  }
}
