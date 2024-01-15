var a = +prompt("Nhap so a");
var b = +prompt("Nhap so b");
if(!isNaN(a) && !isNaN(b)){
    var c = Math.pow(a,b);
    console.log(c);
}else{
    console.log("Vui long nhap so nguyen a va b");
}