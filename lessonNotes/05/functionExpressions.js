// normal function statements

function sayHi() {
	console.log('yo man');
}

sayHi();


// function expression, setting a variable equal to anonymous function
// 

var sayBye = function(){
	console.log('bye');

};

// evoking the function:

sayBye();


// can pass a function into a function as a parameter
function callFunction(funParameter) {
	funParameter();
}

// and...yes.  doing that here :)

callFunction(sayHi);

callFunction(sayBye);








