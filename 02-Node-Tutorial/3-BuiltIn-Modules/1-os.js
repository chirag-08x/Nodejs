// OS Module

// Os module is an object, so we can destructure it. Is is a built-in module so we can type the name directly.
const os = require("os");

// console.log(os);

// Info about current user.
const user = os.userInfo();
console.log(user);

// up-time of the system, how long the system has been running in second
const upTime = os.uptime();
console.log(`System upTime is ${upTime} seconds.`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOs);
