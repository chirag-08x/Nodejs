module.exports.items = ["item1", "item2", "item3"];
const person = {
  name: "bob",
  age: 21,
};

module.exports.singlePerson = person;
// The reason why we can use this syntax is because module.exports is an object, so we can basically adding key/value pair in our object.
