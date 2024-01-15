var a = +prompt("Nhập số nguyên dương a:");
var b = +prompt("Nhập số nguyên dương b:");
if (a > b) {
    var temp = a;
    a = b;
    b = temp;
}
var sumOdd = 0;
var sumEven = 0;
for (var i = a; i <= b; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log(sumOdd);
console.log(sumEven);
