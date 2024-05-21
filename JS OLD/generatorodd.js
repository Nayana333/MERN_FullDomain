// function *Odd(){
//     let num=1;


//     while(num<20){
//         yield num       
//         num+=2
//     }
// }

// let op=Odd()
// for(let i of op){
//     console.log(i);
// }


function *gen(){
    let n=1;
    while(n<=20){
        
            yield n
            n +=2
        

    }
}

let op=gen()
for(let i of op){
    console.log(i);
}