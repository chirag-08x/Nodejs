// Blocking code
console.log("first task");
console.time();
for (let i = 0; i < 10000000; i++) {
  // Do nothing
}
console.timeEnd();
console.log("end task");
