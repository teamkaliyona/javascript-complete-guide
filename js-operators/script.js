let x = 6;
let y = 3;

//x = x + 6;
//x -= 6;
document.getElementById("res1").innerHTML = (x + y) * 2;

document.getElementById("res2").innerHTML = (x >= y);

//let res3 = (x != y) && (x < y);
//let res3 = (x != y) || (x < y);
let res3 = !(x != y);
document.getElementById("res3").innerHTML = res3;