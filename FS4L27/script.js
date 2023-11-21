//1
console.log("BTVN 1");
var names = ["A", "B", "C"];
var xinChao = function(names) {
	names.forEach(name => (console.log('Xin chao ' + name)));
};
xinChao(names);

//2
console.log("BTVN 2");
numbers = [4,1,2,3]
console.log( numbers.sort().map( num => (num*2) ));

//3
console.log("BTVN 3");
var fullNames = [
"Bui Van Nguyen",
"Nguyen Van A",
"Tran Ngoc Anh",
"Do Hao Nam",
"Cao Phu Quoc"
];

var soTenN = function(fullnames) {
	return fullNames.map( name => (name.split(" "))).map( name => name[name.length - 1] ).map( name => name.substr(0,1)).filter( name => name=="N").length;
}
console.log("So nguoi co ten chua N la: " + soTenN(fullNames));

//4
console.log("BTVN 4");
var doubleOnThree = function (numbers) {
	return numbers.map( num => num+2).filter( num => num%3 > 0);
}
console.log(doubleOnThree(numbers));

//5
console.log("BTVN 5");
var heights = [156,157,134,145,178,167,165,189,190,150];
sizes = function(heights) {
	return heights.map( num => {
  if(num < 165) {
  return 'S';
  }
  if(num >= 165 & num < 170) {
  return 'M';
  }
  return 'L';
  });
}
console.log('So ao size S la: ' + sizes(heights).filter(size => size=='S').length);
console.log('So ao size M la: ' + sizes(heights).filter(size => size=='M').length);
console.log('So ao size L la: ' + sizes(heights).filter(size => size=='L').length);


