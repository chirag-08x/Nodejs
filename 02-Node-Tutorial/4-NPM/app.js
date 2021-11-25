// npm = node package manager, global command, comes with node

// commands
// npm --version = to get back installed npm version
// npm i <package_name> = to install a package to our local directory
// npm i -g <package_name> = to install a package to global directory
// npm install = to install all the local dependencies listed in package.json.
// npm uninstall <package_name> = to uninstall a package.

// package.json = manifest file(contains all the info about npm packages/dependencies and the project)
// manual approach = create a new file named as package.json and manually add properties to it. OR
// npm init(step by step, press enter if you don't want to give info)
// npm init -y (default initialization of npm)

// A package itself can use other dependencies, in that case the other packages on which that package is dependent will also gets installed. Testing packages, code formatting packages etc are the types of packages we would add in dev dependencies.

const dash = require("lodash");

const items = [1, [2, 3, [4, [5]]]];
const flattenedArray = dash.flattenDeep(items);
console.log(flattenedArray);

// Dev Dependencies are the dependencies that are required only during the runtime, like nodeman, we don't use nodeman during production, instead we only use it during code execution/runtime.
// npm i <package_name> -D or npm i <package_name> --save-dev

// Not Important
// scripts in package.json = In script we can write our customised command from which our program will run.For example basic syntax to run a .js file is node <file_name.js>, we can edit this command to literally whatever our key name is in of the script we can run our app.js from it.
// "start" : "node app.js"
// New syntax to run file is ==> npm start
// Key name has to be start only.
// "dev" : nodeman app.js
// npm run dev

// In package-lock.json we have version for all dependencies, i.e. not only the dependencies that we have installed but at also the version of dependencies on which our dependencies depend.
