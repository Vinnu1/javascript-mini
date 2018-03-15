// strict mode in javascript

//'use strict'
/*
var boy = "Arnav"; //global variable
console.log(boy);

NaN = "junk";
*/
// Objects

function person(name,age,gender){
    this.name = name,
    this.age = age,
    this.gender = gender
}

// Prototypes

person.prototype.getAge = function(){
	console.log(this.age);
}

var p1 = new person('Vinayak',21,'M');
p1.getAge();

var p2 = new person('Ayushi',23,'F');
p2.getAge();
