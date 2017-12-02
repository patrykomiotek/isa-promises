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