//var courses = new Array('HTML', 'CSS', 'JavaScript');
//var courses = ['HTML', 'CSS', 'JavaScript', 56, true];
var courses = ['HTML', 'CSS', 'JavaScript'];
//courses[0] = 'Java';
courses[courses.length] = 'Java';

courses.push('Python');
courses.push('SQL');
courses.pop();

courses.unshift('DBMS');

console.log(courses);
console.log(courses.length);
console.log(courses.indexOf('Java'));
console.log(courses.sort());