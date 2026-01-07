// console.log("start")

// setTimeout(function() {
//     console.log("SetTimeout msg delays 3 seconds");
// }, 3000)

// console.log("end");

//----------------------------------------------------------------------------


// function calc(a, b, callback){
//     return callback(a, b)
// }
// function add(a, b){
//     return a+b;
// }
// function mul(a, b){
//     return a*b;
// }

// console.log(calc(5, 3, add))
// console.log(calc(5, 3, mul))

//----------------------------------------------------------------------------


function step1(callback){
    setTimeout(()=>{
        console.log("step1 completed");
        callback()
    }, 2000)
}
function step2(callback) {
    setTimeout(()=>{
        console.log("step2 completed");
        callback()
    }, 3000)
}
function step3(callback) {
    setTimeout(()=>{
        console.log("step3 completed");
        callback()
    }, 2000)
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All steps completed")
        })
    })
})