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

function loadImage(url, callback) {
  var img = new Image();
  img.onload = function() {
    successCallback();
  }
  img.onerror = function() {
    errorCallback();
  }
  img.src = imgUrl;

}



// load xong ảnh 1 thì load ảnh 2
// load xong ảnh 2 thì load ảnh 3
// ...

function loadImage() {
  
  return new Promise(function(resolve, reject, imgUrl) {
    var img = new Image();
    img.onload = function() {
      resolve();
    }
    img.onerror = function() {
      reject();
    }
    img.src = imgUrl;
  });
}

loadImage(imgUrl).then(function() {
  console.log('load image thanh cong');
})
.catch(function() {
  console.log('load image error');
});