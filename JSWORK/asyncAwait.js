function delay(min){
    return new Promise((resolve)=>setTimeout(resolve,min))

}

async function greet(){
    console.log('started');
    await delay(3000)
    console.log('ended');

}

greet()
