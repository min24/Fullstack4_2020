
function chiaHetChoBa(num) {
    if (num % 3 == 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(chiaHetChoBa(3));

var students = ['nguyen', 'tung', 'hoang', 'duy'];

var twoFirstStudents = students.splice(0, 2);

console.log(students[1]);
console.log(students.length);
console.log(students.join("|"));

var students = ['nguyen', 'tung', 'hoang', 'duy'];
console.log(students.sort());
console.log(students.sort().reverse());

var studentTeenName = students.map( function(student){
    return student + "'s";
});

console.log(studentTeenName);

var numbers = [3, 5, 8];

var numberAddOne = numbers.map( (num) => {return num + 1;});
console.log(numberAddOne);


var numbers =[3, 5, 8, 4, 1];
// Nhat ra cac so chan 
numberEvens = numbers.filter( (num) => {
    var laSoChan = num % 2 ==0;
    return laSoChan;
});
console.log(numberEvens);

// Co phai tat ca cac sv deu ho nguyen?
var students = [
    'Nguyen Long Duy',
    'Nguyen Van Tung',
    'Bui Van Nguyen',
    'Nguyen Thi Nga'
];

var tatCaDeuHoNguyen = students.every( student => {
    var cacTuTrongTen = student.split(' ');
    var ho = cacTuTrongTen[0];
    return ho == 'Nguyen';
});

console.log(tatCaDeuHoNguyen);

var total = numbers.reduce((tong, soHienTai) => {
    return tong + soHienTai;
}, 0);

console.log(total);

//1
console.log("BTVN 1");
var names = ["A", "B", "C"];
names.forEach(name => (console.log('Xin chao ' + name)));

//2
console.log("BTVN 2");
numbers = [4,1,2,3]
console.log( numbers.sort().map( num => num*2 ));

//3
console.log("BTVN 3");
var fullNames = [
"Bui Van Nguyen",
"Nguyen Van A",
"Tran Ngoc Anh",
"Do Hao Nam",
"Cao Phu Quoc"
];
var btvn3 = function (fullNames) {
var name1 = fullNames.map( name => (name.split(" ")));
var name2 = name1.map( name => name[name.length - 1] );
var name3 = name2.map( name => name.substr(0,1));
return name3.filter( name => name=="N").length;
};
console.log("So nguoi co ten chua N la: " + btvn3(fullNames));

//4
console.log("BTVN 4");
var btvn4 = function (numbers) {
	var numAdd2 = numbers.map( num => num+2);
	return numAdd2.filter( num => num%3 > 0);
}
console.log(btvn4(numbers));

//5
console.log("BTVN 5");
var heights = [156,157,134,145,178,167,165,189,190,150];
var size_S = heights.filter( num => num < 165);
var size_M = heights.filter( num => (num>=165 & num<170));
var size_L = heights.filter( num => num > 170);
console.log("So ao size S la: " + size_S.length);
console.log("So ao size M la: " + size_M.length);
console.log("So ao size L la: " + size_L.length);



