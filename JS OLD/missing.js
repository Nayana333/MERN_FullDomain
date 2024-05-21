// function missing(){
//     let arr=[9,5,3,1,2]
//     let missing=[]
//     let min=Math.min(...arr)
//     let max=Math.max(...arr)
//     for(let i=min;i<max;i++){
//         if(arr.indexOf(i)<0){
//             missing.push(i)


//         }
        
//     }
//     return missing
// }

// console.log(missing());

function missing(){
    let arr=[5,7,3,1,2]
    let newArr=[]
 let max=Math.max(...arr)
 let min=Math.min(...arr)
 for(let i=min;i<max;i++){

   if( arr.indexOf(i)<0){
        newArr.push(i)
    }

 }
 console.log(newArr);
}

missing()