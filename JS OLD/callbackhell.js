// function asyncTask1(callback){

//     setTimeout(()=>{
//         console.log('async 1');
//     },1000)
//     callback()
// }

// function asyncTask2(callback){
//     setTimeout(()=>{
//         console.log('async2');
//     },2000)
//     callback()
// }


// asyncTask1(function(){
//     asyncTask2(function(){
//         console.log('all settled');
//     })
// })

// asyncTask1(function(){
//     asyncTask2(function(){
//         console.log('completed');
//     })
// })


function asyncTask1(callback){
    setTimeout(()=>{
        console.log('asyncTask1');

    },2000)
    callback()
}

function asyncTask2(callback){
    setTimeout(()=>{
        console.log('asynctask2');
    },3000)
    callback()
}

asyncTask1(function(){
    asyncTask2(function(){
        console.log('reached');
    })
})