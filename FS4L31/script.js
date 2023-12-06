
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

// ==================================================
function loadAllImages() {
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
  
}

loadAllImages()
.then( function() {
  console.log('load tat ca anh thanh cong');
})
.catch( function() {
  console.log('Load anh that bai');
})

// ========== async va await ==========


async function loadAllImages() {
  await loadImage(images[0]); // chờ dòng code này chạy xong rồi dòng tiếp theo mới chạy
  await loadImage(images[1]);
  await loadImage(images[2]);
}

loadAllImages()
.then( function() {
  console.log('load all images success');
})
.catch( function() {
  console.log('Load anh bi loi');
}
)