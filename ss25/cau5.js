var n = +prompt("Nhập số nguyên n:");
var countEvenDigits = 0;
var nString = Math.abs(n).toString();
for (var i = 0; i < nString.length; i++) {
    var digit = parseInt(nString[i]);
    if (digit % 2 === 0) {
        countEvenDigits++;
    }
}
console.log(countEvenDigits);
