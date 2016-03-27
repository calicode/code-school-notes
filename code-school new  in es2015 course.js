/*let declarations are scoped to the nearest block and not hoisted
const are block scoped not hoisted. read only after declaration. 


default parameters. if function is called with no arguments then usernames will be set
to an empty array 
*/

function loadProfiles(userNames = []) {
nameLength = userNames.length

}



//options object passing object as function parameter including program options

setPageThread("new version out soon", 
{popular:true,expires:1000,activeClass:"is-page-thread"});

function setPageThread(name, options= {}) {
let popular = options.popular;
let expires = options.expires;
let activeClass = options.activeCClass

}

// named parameters. ** not in node yet**, works in browser. 

function setPageThread(name, {popular,expires,activeClass}){

	console.log("Name: ", name); etc
}
setPageThread("new version out soon", {popular:true,expires:10000,activeClass:"blah"});


// pair with default parameters
setPageThread("new version out soon");

function setPageThread(name, {popular,expires,activeClass} ={}){

	console.log("Name: ", name); // new version out soon
	console.log("popular:", popular); // undefined
}



variadic functions support variable number of arguments

rest parameter used in function definition
function displaytags (...tags){


	//created array of arguments, mrest parameter must be last argument in function



}
// spread operator passed array of things as individual arguments

displayTags(...tags);


arrow functions bind to the scope of where they are defined, not where they
are used  aka lexical binding

getRequest(this.urlPath,(data) => {


});


//objct initalizer shorthand


function buildUser(first,last){
let fullName = first + " " + last;


// when object properties and the variables containing data for them are
// named the same,  you can use object shorthand like below instead of
// return { first:first,last:last,fullName:fullName}
return {first,last,fullName};

}
let steve = buildUser("Steve","Salami");
console.log steve.first = "Steve"
console.log steve.last = "Steve Salami";


// object destrcturing. Instead of assigning values of object properties
// to local variables, can use let {} with the property names to assign
// them to local variables of the same name 


let {last,fullName} = buildUser("Bobby","Baboba");
console.log last = "Baboba";
console.log fullName = "Bobby Baboba"


// new shorthand notation for assigning function to object
let someFunc(){
	return something;
}


//template strings, string literals with support for interpolation
// wrapped in backtics 

let fullName = `${first} ${last}`;

let veryLongTest = `Hi ${first},

do you want

to go

to hell

Regards ${fromHell.sysop}`;

/*
newlines will be preserved. having strings like this is against the 
javascript style guide by google which prefers concatenation. wondering
how that would look with template strings
*/

//object.assign

function countdownTimer(target,timeLeft,options = {}){

//using default object
let defaults = {
	container: ".timer-display",
	timeUnit:"seconds",

	etc etc etc
};
/*
object.assign method copies properties from one or more source objects to
// a target object specified as the very first argument. Leaves source
// objects intact, and only overwrites missing  values. Order of parameter 
//objects must matter here
// or options would be overwritten by defaults. Yep, value from the last chain
takes precedence



*/
let settings = Object.assign({},defaults,options);

}



/* array destructuring 

*/

let users = ["meow", "moo", "blah"];

let [a,b,c] = users;
console.log (a,b,c); // meow moo blah

let [a,,b] = users ;
console.log (a,b) // meow blah

let [first, ...rest] = users;
console.log (first,rest); // meow["moo","blah"]



function activeUsers(){
let users = ["meow", "moo", "blah"];
return users;

}

let [a,b,c] = activeUsers();
console.log(a,b,c)// meow moo blah


// for of loops - for arrays mmainly. To work with objects, needs Symbol.iterator property. 

let users = ["meow", "moo", "blah"];

for (let name of users){
	console.log(name); // meow moo blah
}
//array.find, returns first element in array matching return expression, in this case first admin that is truthy

'use strict'
let users = [{name:"meow", admin:true} ,{name:"moo",admin:true} ,{name:"blah", admin:false}];
let admin = users.find( (user) => {
	return user.admin;


});
console.log(admin) ;// 