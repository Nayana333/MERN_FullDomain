function promise(){
    return new Promise((resolve,reject)=>{
        let i=9
        if(i===9){
            resolve('success')
        }
        else{
            reject('not')
        }
    })
}

promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})



