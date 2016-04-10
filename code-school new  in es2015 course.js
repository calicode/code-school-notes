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

/*Map object is a simple key/value data structure.  Any value may be used as either a key or a value
and objects are not converted to strings. 

*/

let user1 = {name:"Sam"};
let user2  = {name:"Spade"};
let totalReplies = new Map();
totalReplies.set(user1,5);
totalReplies.set(user2,42);

console.log totalReplies.get(user1) //5
console.log totalReplies.get(user2) //42
 

 /*weakmaps, type of map where only objects can be passed as keys.  Not iterable. 
 Better with memory as they can be garbage collected while weakmap still exists*/

 new WeakMap();


 
 /*Sets 
Set object stores unique values of any type. Unlike array which can have duplicate entries
Duplicate entries are ignored. Set objets are  iterable and can be used with for of

Weak sets, same concept as weakmaps. 





 */
let tags = new Set
tags.add("Javascript");
tags.add({cats:"meow"});
tags.add(42)

/*weak sets can be used to create special groups from existing objects without mutating them
favoring immutable objects allows for much simpler code with no unexpected side effects.

for example when a user reads a post, add the post to a weakset of readposts and then
use the weakset .has method to check if the weakset has the post. Original post object is
not touched. 
*/


// <-------------Section 5 : Classes --------->

class SponsorWidget {
	constructor(name,description,url){
	this.name = name;
	this.description = description
	this.url = url;	
	}

	render(){

	}
	meowAlert(){

	}
}


let catnip_sponsorWidget = new SponsorWidget("catnip contraptions", "catnip toys", "www.catnips.com/meow")
catnip_sponsorWidget.render();

// Using exends in a subclass to inherit properties of base class
class newWidget extends SponsorWidget {
	constructor(name,description,url){
		super(name,description,url); //  causes parents constructor method to be invoked?
	}

	render(){
		this.meowAlert(this.name);
	}

}


// modules
//flash-message.js
export function alertMessage(message) {

	alert(message);
}
export function logMessage(message){
/
or export {alertMessage,logmessage};
}

//app.js

import {  flashMesage, logmessage} from './flash-message';
or
import  * as flash from './flash-message'
flash.alertMessage("blah");


// exporting constants so they can be used in multiple places and only updated once
//constants.js
export const MAX_USERS = 3;

//lapp.js
import {MAX_USERS} from './constants';




html still has script tags calling both

// Section 6 - Promises iterators and generators

function getPollresultsFromServer(pollName){

	return new Promise(function(resolve,reject){
		resolve(someValue);
		reject(someValue;)
	});
};

Promise lifecyle, new promises is in pending state, it can then become fulfilled or rejected

function getPollresultsfomServer("Cats Vs Dogs"){
return new Promise(function(resolve,reject){


	request.onload=function() {
		if(request.status >=200 && request.status < 400){
			resolve(request.response);

		}else {
			reject(new Error(request.status));
		}
};

	request.onerror = function() {
		reject(new Error("Error fetching results"));
	};
});





}
getPollresultsFromServer("Cats vs. Dogs")
.then(function(results){
	return results.filter((result) => result.city === "Chicago");})
.then(function(resultsFromChicago) {
	ui.Render(resultsFromChicago);
});


export default function getReplies(topicId){
  return new Promise(function( resolved,rejected){
    _getRepliesForTopic(topicId, function(data){
      let replies = data.replies;
      if(replies){
      resolved(replies);  
      }else{
        let error = new Error("An error occurred");
        rejected(error);
      }
    });
  });
}



/* Iterators
Iterables  return an iterator object. this object knows how to access items from a collection  1 
at a time, while keeping track of its current position within the sequence. 
basically adds .next method to object and isDone and count so that you can loop through a collection
until count === collection.length and then you set isDone to true. 
*/



/*generators The function * declaration defines generator functions. These are special functions
from which we can use the yield keyword to return iterator object

Generator functions return objects that provide the same next method expected by
for of, spread operator, and destructuring. 
s*/


function  *nameList(){
	yield "Sam"
	yield "tyler";
}



let post = {title: "blah moo",  replied:19};

post[Symbol.iterator] = function  *() {

	let properties = Object.keys(this);
	for (let p of properties){
		yield this[p];
	}
}


