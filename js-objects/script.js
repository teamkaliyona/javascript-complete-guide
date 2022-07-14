let user = {
  firstName: 'Rahul',
  lastName: 'Sharma',
  age: 25,
  hobbies: ['dancing', 'singing', 'painting'],
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

//console.log(typeof user);
//console.log(user);
//console.log(user.firstName + " " + user.lastName);
//console.log(user['firstName']);
//console.log(user.hobbies);
let userHob = user.hobbies;
console.log(userHob);

console.log(user.fullName());

//for ... in

// for(let i in user) {
//   console.log(user[i]);
// }

for(let x in user.hobbies) {
  console.log(user.hobbies[x]);
}