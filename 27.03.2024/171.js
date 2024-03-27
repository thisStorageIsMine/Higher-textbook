// 1

function loadImg(path) {

    return new Promise (() => {
        let image = document.createElement('img');
        image.src = path;
    
        image.addEventListener('load', function() {
            resolve(image)
        });
        image.addEventListener('error', function() {
            reject('image load error');
        });
    })
}

// 2

let paths = ['img1.png', 'img2.png', 'img3.png'];

Promise.all(paths).then(data => {
    data.map(i => document.body.append(i));
})

// 3

function domContentLoaded() {
    return new Promise((resolve, reject) => {
      window.addEventListener('DOMContentLoaded', function() {
        resolve('dom загружен');
      });
    });
  }
  
  domContentLoaded()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
