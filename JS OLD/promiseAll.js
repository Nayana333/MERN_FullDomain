
function promise1(){
    return new Promise((resolve)=>{
        let i=0
        if(i===0){
            resolve('success')
        }
    })
}

function promise2(){
    return new Promise((resolve)=>{
        let j=9;
        if(j===9){
            resolve('true')
        }
    })
}


Promise.all([promise1(),promise2()]).then((result)=>{
    console.log(result[0])
        console.log(result[1]);
    ;
}).catch((err)=>{
    console.log(err);
})

