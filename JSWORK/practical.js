// function printName(...str){
//     let count=0
//    for(let i=0;i<str.length;i++){
//     let split=str[i].split('');
//     let splitSec=str[i+1].split('')
//     for(let j=0;j<split.length;j++){
//         for(let k=0;k<splitSec.length;k++){
//             if(split[j]===splitSec[k]){
//                 count=count+1
//             }
//         }
//     }
//     for(let )
    
//    }
  
// }

// console.log(printName('nayana','nayana','abc','abc'));


function printName(arr){
    let count=0

    for(let i=0;i<=arr.length-1;i++){
      
           let split=arr[i].split('')
           let splitSec=arr[i+1].split(' ')

           for(let j=0;j<=split.length;j++){
            for(let k=0;k<=splitSec.length;k++){
                if(split.charAt(j)===split.charAt(k)){
                    count++
                }
            }
           }
    }
}

printName(['nayana','nayana','abc'])