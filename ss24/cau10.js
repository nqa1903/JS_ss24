var numberOfRows = +prompt("Nhập số hàng cho tam giác:");
for (var i = 1; i <= numberOfRows; i++){
    for (var j = 1; j <= i; j++) {
        document.write("* ");
    }
    document.write("<br>");
}
document.write("<br>");
for (var i = numberOfRows; i >= 1; i--) {
    for (var j = 1; j <= i; j++) {
        document.write("* ");
    }
    document.write("<br>");
}