function makeOrder(order) {
  return new Promise((resolve, reject) => {
    const menu = ['piwo', 'salatka', 'frytki', 'kielbasa', 'herbata'];
    setTimeout(() => {
      if (menu.indexOf(order) !== -1) {
        resolve(order);
      } else{
        reject('Sorry nie mamy!');
      }
    }, 3000);
  });
}

const order = makeOrder('piwo');

order.then((food) => {
    console.log('Hurra! Dostałem ' + food);
  })
  .catch((food) => {
    console.log('Oh no! Nie ma ' + food);
  });


