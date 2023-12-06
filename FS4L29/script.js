class selectbox {
  constructor(selector) {
    this.selector = selector;
    this.element = document.getElementById(this.selector);
    this.defaultElement = document.querySelector('#'+this.selector+'>span');
    //this.childrenDiv = document.querySelector('#'+this.selector+'>div');
    this.defaultElement.addEventListener('click', () => {
      if (this.element.classList.contains('opened')) {
        this.element.classList.remove('opened');
      }
      else {
        this.element.classList.add('opened');
      }
    });

    document.addEventListener('click', (event) => {
      if (event.target != this.defaultElement) {
        this.element.classList.remove('opened');
      }
    })
  }
}

var selectCity = new selectbox('city');

// ==============================================

var imgUrl = "https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-28.jpg"

var images = [
  'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
  'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-3.jpg',
  'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-6.jpg'
]

// load xong ảnh 1 thì load ảnh 2
// load xong ảnh 2 thì load ảnh 3
// ...

function loadImage(url) {
  
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      resolve();
    }
    img.onerror = function() {
      reject();
    }
    img.src = url;
  });
}

var allImageLoadPromises = [];

for (var i = 0; i < images.length; i++){
  var imgPromise = loadImage(images[i]);
  allImageLoadPromises.push(imgPromise);
}

Promise.all(allImageLoadPromises)
.then( function() {
  console.log('load tat ca anh thanh cong');
})
.catch( function() {
  console.log('Load anh that bai');
})