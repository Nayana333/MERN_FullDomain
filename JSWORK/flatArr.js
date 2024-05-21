// function flat(arr){
//     let newArr=[]
//     for(let i=0;i<arr.length;i++){
//         if(!Array.isArray(arr[i])){
//             newArr.push(arr[i])
//         }else{
//             newArr=newArr.concat(flat(arr[i]))
//         }
//     }
//     return newArr
// }
// console.log(flat([8,[8,0,[6,9]],0,5]));


function flat(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(!Array.isArray(arr[i])){
            newArr.push(arr[i])
        }
        else{
            newArr=newArr.concat(flat(arr[i]))
        }
    }
    return newArr
}

console.log(flat(([8,[8,0,[6,9]],0,5])));