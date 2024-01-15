var x = +prompt("Nhap so nguyen duong");
var isPrime = true;
if (x <= 1) {
    isPrime = false;
} else {
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(x + "la so nguyen to");
} else {
    console.log(x + "khong la so nguyen to");
}