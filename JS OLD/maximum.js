// function maximum(){
//     const arr=[8,6,4,6,8,2]
//     let inf=-Infinity
//     let sec=-Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>inf){
//             sec=inf;
//             inf=arr[i]  
          
//     }
//     else if(arr[i]>sec &&  arr[i]<inf){
//         sec=arr[i]

//     }

// }
// return sec
// }

// console.log(maximum());


function maximum(){
    let arr=[8,6,4,6,8,2]
    let inf=-Infinity
    let sec=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>inf){
            sec=inf
            inf=arr[i]
        }
        else if(arr[i]>sec && arr[i]<inf){
            sec=arr[i]
        }
       
    }
    return sec
    
    
}

console.log(maximum());