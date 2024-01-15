var n = +prompt("Nhập số nguyên dương n:");
var sum = 0;
var term = 1;
for (var i = 1; i <= n; i++) {
    term = term * 10 + i;
    sum += term;
}
console.log(sum);
