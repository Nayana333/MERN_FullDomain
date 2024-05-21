// function *even(){
//     let count=0;
//     let num=2
//     while(count <10){
//         yield num;
//         count++
//         num +=2
//     }
// }

// let generator=even()
// for(let i of generator){
//     console.log(i);
// }

function *even(){
    let count=0;
    let n=2
    while(count<10){
        yield n;
        n +=2
        count++
    }

}

let op=even()
for( let i of op){
    console.log(i);
}