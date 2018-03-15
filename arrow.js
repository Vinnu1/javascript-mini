'use strict'
// Arrow functions



//normal
function f1(){
    return "normal";
}

//inline
let f2 = function(){
    return "inline"
}

//anonymous 
/*
Element.addEventListener("click", function(){
    return "anonymous";
})
*/

//Arrow - inline && anonymous.

let f3 = () => "Hi I am an arrow inline function";

let f4 = para1 => para1*2;

let f5 = (para1,para2) => {
    let area = para1 * para2 ;
    return area;
}

console.log(f3());

console.log(f4(6));

console.log(f5(2,3));

//this, arguments, super, new
