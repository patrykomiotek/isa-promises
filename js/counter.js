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
      return myCounter(40).then(function(t) {
        return z + r + s + t;
      })
    });
  });
}

function add2(z) {
  return myCounter(20)
    .then(function (r) {
      return myCounter(30 + r)
    })
    .then(function(s) {
      return myCounter(40 + s);
    })
    .then(function(t) {
      return z + t;
    });
}

async function add3(z) {
  var a = await myCounter(20);
  var b = await myCounter(30);
  var c = await myCounter(40);
  return a + b + c + z;
}

add3(50).then(function(result) {
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
