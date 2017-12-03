import api from './api';

var headers = new Headers({
  'Content-type': 'text/plain'
});

var config = {
  method: 'GET',
  headers: headers
};

fetch('https://jsonplaceholder.typicode.com/users', config)
  .then(function(response) {
    return response.json();
}).then(function(data) {
  console.log(data);
});

api.get('/users');
api.post('/places').then(data => {

})

// api.get(url)
// api.post(url)
// api.put(url)
// api.delete(url)