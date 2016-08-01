// split code up into smaller chunks (modules) by intended purpose/function instead of placing it all in one file.  

// makes working with code easier in many ways.  instead of throwing all of your clean clothes in a heap,
// you fold them and then place them in drawers in an organized fashion.  (or tools in a garage, etc)

// you can find what you're looking for faster, it doesn't get wrinkled, if something is out of place,
// it stands out and is easier to find, etc.





// this imports what we designated in the count.js file (the counter function we exported)
// otherwise, we couldn't use the counter function as part of this file.  And...

// this sets the variable name of bobsGoofyCounter to the counter function exported from count.js
// ('./count') - ./ is short for 

var bobsGoofyCounter = require('./count');


// to test:

console.log(bobsGoofyCounter(['shang tsung', 'goro', 'subzero', 'scorpion', 'reptile']));






