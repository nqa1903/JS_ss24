var x = +prompt("Nhap so nguyen duong");
var reversed = 0;
var numberString = x.toString();
for (var i = numberString.length - 1; i >= 0; i--) {
    reversed = reversed * 10 + parseInt(numberString[i]);
}
console.log(reversed);
