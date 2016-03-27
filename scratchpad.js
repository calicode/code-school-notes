'use strict'
let users = [{name:"meow", admin:true} ,{name:"moo",admin:true} ,{name:"blah", admin:false}];
let admin = users.find( (user) => {
	return user.admin;


});
console.log(admin) ;// 