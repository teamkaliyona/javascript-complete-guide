const data = '{"name":"Rahul", "age":25, "course":["JavaScript", "HTML", "CSS"]}';

const obj = JSON.parse(data);

console.log(obj);

const student = {"name": "Ankita", "age": 30};

let jsonStudent = JSON.stringify(student);

console.log(jsonStudent);