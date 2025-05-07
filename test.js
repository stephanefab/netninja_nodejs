const _ = require('lodash');

const randNumber = _.random(0, 20); // generate a random number beetween 0 and 20
console.log(randNumber);

const great = _.once(() => {
    console.log('Great');
});// load the function only once

great();
great();