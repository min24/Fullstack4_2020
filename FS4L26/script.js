
for (var i=0; i <= 10; i++){
    console.log(i);
}

// Xuat cac so tu 0-10 nhung tru so 5

for (var i=0; i <= 10; i++){
    if (i==5){
        continue;
    }
    console.log(i);
}

var classHeading = document.createElement('h1');
classHeading.innerHTML = 'Lop hoc Fullstack';

var classDiv = document.createElement('div');
classDiv.innerHTML = 'Lop hoc Fullstack';

console.log(classHeading);

function dangky() {
    console.log('toi muon dang ky khoa hoc');
}

var nutDangKy = document.getElementById('nutDangKy');
var nutXacNhan = document.getElementById('nutXacNhan');
var divThongBao = document.getElementById('nutThongBao');


nutDangKy.addEventListener('click', function(){
    nutXacNhan.addEventListener('click', () => {
        var msg = document.createElement('div');
        msg.id = 'msg';
        msg.style.color = 'red';
        msg.innerHTML = 'Ban da dang ky';
        divThongBao.appendChild(msg);
    });
});

var loading = document.getElementById('loading');
var pageContent = document.getElementById('page-content');

window.addEventListener('load', () => {
    console.log('loaded');
    loading.style.display = 'none';
    pageContent.style.display = 'block';
});