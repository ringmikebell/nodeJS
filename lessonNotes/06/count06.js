// here's a module that counts stuff so we can use its functionality somewhere else.  

// to make some or all of this available to other modules, we declare those parts of this module (count.js)
// at the bottom of the file and "export" them...


var counter = function(arr){
	return 'There are ' + arr.length + ' elements in this array';

};

console.log(counter(['jax', 'sonya', 'johnny cage', 'rayden']));




// here's the export statement that makes the counter function available to other files.
// this exports the counter function for use elsewhere.  we can leave off the " .js "



module.exports = counter;








