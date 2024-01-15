var x = +prompt("Nhập một số nguyên dương:");
var sum = 0;
for (var i = 1; i <= x; i++) {
    console.log(i);
    sum += i;
}
if (sum % 2 === 1) {
    console.log(sum);
} else {
    console.log("Tổng là số chẵn");
}
