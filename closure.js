'use strict'
//closure

function x(){
    let name = "Vinayak";
    function y(){
        return name;
    }
    return y();
}

console.log(x());

//another example

function mulMaker(num1){
    return function(num2){
        return num1*num2;
    }
}

let mul = mulMaker(5);
console.log(mul(5));