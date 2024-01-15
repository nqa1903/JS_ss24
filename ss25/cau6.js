var n = +prompt("Nhập số nguyên dương n:");
var fib0 = 0;
var fib1 = 1;
var result = 0;
if (n === 0) {
    result = fib0;
} else if (n === 1) {
    result = fib1;
} else {
    for (var i = 2; i <= n; i++) {
        result = fib0 + fib1;
        fib0 = fib1;
        fib1 = result;
    }
}
console.log(result);
