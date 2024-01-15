var x = +prompt("Nhap so nguyen duong");
var count = 0;
var currentNumber = 2;
while (count < x) {
    var isPrime = true;
    if (currentNumber <= 1) {
        isPrime = false;
    } else {
        for (var i = 2; i <= Math.sqrt(currentNumber); i++) {
            if (currentNumber % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(currentNumber);
        count++;
    } 
    currentNumber++;
}
