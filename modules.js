// const fromModule = require('./people.js');
// console.log("People: "+fromModule.peoples+" || "+"Ages: "+fromModule.ages);
const { peoples, ages } = require('./people.js');
console.log("People: "+peoples+" || "+"Ages: "+ages);

const os = require('os');
console.log("Plateform: ", os.platform(), "HomeDIR: ", os.homedir());
console.log(os);