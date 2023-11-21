var ho = "Bui Van";
var ten = "Nguyen";

var hoTenDayDu = ho + " " + ten;

console.log(hoTenDayDu);

var name = "bui van nguyen";

var tenVietHoa = name.toUpperCase();
console.log(tenVietHoa);

var cat = name.substring(1, 6);
console.log(cat);

console.log(name.indexOf('n'));
console.log(name.lastIndexOf('n'));
console.log(name.split(' '));


function chaoHoi(){
    console.log('Xin chao');
    console.log('Toi ten la Nguyen');
}

var chaoHoi = function(){
    console.log('Xin chao');
    console.log('Toi ten la Nguyen');
}
chaoHoi();

function cong(a, b){
    if (a == 0){
        console.log("Tai sao a = 0?");
        return;
    }
    var tong = a + b;
    return tong;
}

var chaoHoi = (name, chaoXong) => {
    console.log('xin chao, toi la ' + name);
    chaoXong();
}

var batTay = () => {
    console.log('bat tay');
}

chaoHoi("Duy", batTay);