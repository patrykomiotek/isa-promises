const text = (text) => {
 document.getElementById('info').innerHTML = text;
}

const myPromise = new Promise((resolve, reject) => {
  text('Hej, jestem z poludnia...');
  setTimeout(() => {
      text('Hej, jestem z Mordoru...');
      if (1 === 1) {
        resolve(new Promise((resolve, reject) => {
          setTimeout(() => {
            text('Hej, jestem z centrum...');
            resolve(new Promise((resolve, reject) => {
              setTimeout(() => {
                if (2 === 2) {
                  resolve('Hello Hitty')
                } else {
                  reject();
                }
              }, 2000);
            }));
          }, 2000);
        }));
      } else {
        reject();
      }
  }, 2000);
  text('hej, jestem z 24.00');
});

myPromise.then(() => {
  text('jestem z zachodu...');
}).then(() => {
  text('callback hell! oh no!');
  document.getElementById('load').style.display = 'none';
}).then(text => {
  document.getElementById('load').innerHTML = text;
});

myPromise.catch(() => {
  text('jestem ze wshodu');
})



