const User = function (id, firstName, lastName, email, age) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
};

User.fromObject = function (json) {
  return new User(json.id, json.firstName, json.lastName, json.email, json.age);
};
module.exports = { User };
