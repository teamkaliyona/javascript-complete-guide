function sayHello(name, age) {
  //let name = 'Ankita';
  document.write("Namaskara " + name + " you are " + age + "years old");
}

sayHello('Ankita', 25); // function call - invoke

function add(num1, num2) {
  return num1 + num2;
}

document.write('<p>' + add(3,6) + '</p>');
document.write('<p>' + add(11,7) + '</p>');
document.write('<p>' + add(40,74) + '</p>');

function exitMsg(name) {
  document.write('<h3> Thank you ' + name + ' for visiting Kaliyona </h3>');
}