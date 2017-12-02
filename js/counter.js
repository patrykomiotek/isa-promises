function myCounter(x) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(x);
    }, 2000);
  });
}

function add(z) {
  return myCounter(20).then(function(r) {
    return myCounter(30).then(function(s) {
      return z + r + s;
    });
  });
}

function add2(z) {
  return myCounter(20)
    .then(function (r) {
      return myCounter(30 + r)
    })
    .then(function(s) {
      return z + s;
    });
}

add(50).then(function(result) {
  console.log('Wynik result' + result);
});



// function myData() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve([{
//         name: 'ala'
//       }, {
//         name: 'ma'
//       }, {
//         name: 'kota'
//       }]);
//     }, 2000);
//   });
// }
//
// myData().then(function(data) {
//   console.log(data);
// });
