let str1 = 'Namaskara!';
let str2 = " Welcome to Kaliyona";

//document.getElementById("title").innerHTML = str1 + str2;
let concatStr = str1.concat(str2);
document.getElementById("title").innerHTML = concatStr;

//document.write("String length is " + concatStr.length);

let subStr = str2.substring(0, 8);
//document.write("Substring is " + subStr);

let replacedStr = str1.concat(str2.replace("Kaliyona", "JavaScript Kaliyona Tutorial")).toUpperCase();
document.write(replacedStr);