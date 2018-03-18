'use strict'

//callbacks
let arr = [1,2,3,4];
function callback(arr1){
    setTimeout(()=>console.log(arr1),5000);
}
function consoleLog(arr,callback){
    return callback(arr);
}

consoleLog(arr,callback);

//promises
let flag = 1;
let p = new Promise((resolve,reject)=>{
    if(flag == 1){
        setTimeout(()=>resolve("flag is one"),3000);
    }
    else{
        reject("Not 1");
    }
})
// .then((result)=>{
//     console.log("Successful Promise:"+result);
// }).catch((err)=>{
//     console.log("Rejected Promise:"+err);
// });

let p1 = 50;
let p2 = new Promise((resolve)=>{
    resolve("P2 is successful");
})

Promise.all([p,p1,p2]).then((result)=>{
    console.log("All promises are successful:"+result);
}).catch((err)=>{
    console.log("At least one of the promises failed:"+err);
});





