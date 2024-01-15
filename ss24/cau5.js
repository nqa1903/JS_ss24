var x = +prompt("Nhap so nguyen duong");
var sum = 0;
for (var i = 1; i <= x; i++) {
    sum += 1 / Math.pow(i, 3);
}
sum = parseFloat(sum.toFixed(5));
console.log(sum);
