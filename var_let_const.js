'use strict'

//var - redeclarable, functional/global
var a = "hello";
var a = "hey";
console.log(a);
if(true){
    var tree = "mango tree";
}
console.log(tree);

//let - reassignable, block scope
let b = "Namaste";
b = "Hello";
console.log(b);
// if(true){
//     let tree = "mango tree";
// }
//console.log(tree);

//const - not immutable, block scope
const c = [1,2,3,4];
c.push(5,6);
c.pop();
c.pop();
c.pop();
console.log(c);

//use let when you have to use reassign
let flag = 0;
flag = 1;

//use const when you just want to make changes in it's properties
const btn = document.getElementById("btn");
