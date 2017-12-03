const headers = new Headers({
  'Content-type': 'application/json'
});

function method(type, params) {
  const config = {
    method: type,
    headers
  }
  return fetch(url, config).
    then(response => response.json());
}

function get(url) {
  return method('GET');
}

function post(url) {
  return method('POST');
}

function put(url) {
  return method('PUT');
}

function _delete(url) {
  return method('DELETE');
}

export default {
  get,
  post,
  put,
  'delete': _delete
}