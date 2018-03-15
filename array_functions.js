'use strict';

let array = [1,2,3,4,5];

//map 
let array_plus_10 = array.map(function(element){
    return element + 10;
});

console.log(array_plus_10);

//reduce
let array_sum = array.reduce(function(accum,cur){
    return accum + cur;
},0);

console.log(array_sum);

//filter
let array_even = array.filter(function(element){
    return element % 2 == 0;
});

console.log(array_even);