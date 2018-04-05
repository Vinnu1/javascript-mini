//Async Await

"use strict"

function wait10secs(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("waitOver"),10000)
    })
}

async function callWait(){
    console.log("Async Started")
    let result = await wait10secs(); //stop execution till wait10secs is finished
    console.log("Result:",result)
    console.log("Async Finished")
}

callWait()

