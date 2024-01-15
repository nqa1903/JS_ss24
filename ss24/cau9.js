var a = +prompt("Nhập số nguyên a:");
var b = +prompt("Nhập số nguyên b:");
var c = +prompt("Nhập số nguyên c:");
var d = +prompt("Nhập số nguyên d:");
var findGCD = function(x, y){
    while (y !== 0) {
        var temp = y;
        y = x % y;
        x = temp;
    }
    return x;
};
var gcdAB = 0;
var gcdABC = 0;
var finalGCD = 0;
while (gcdAB === 0) {
    gcdAB = findGCD(a, b);
}
while (gcdABC === 0) {
    gcdABC = findGCD(gcdAB, c);
}
while (finalGCD === 0) {
    finalGCD = findGCD(gcdABC, d);
}
console.log("Ước chung lớn nhất của " + a + ", " + b + ", " + c + ", và " + d + " là: " + finalGCD);
