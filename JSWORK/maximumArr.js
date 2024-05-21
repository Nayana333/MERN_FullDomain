const maximum=()=>{
    let arr=[6,7,4,1,2]
    let first=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
           first=arr[i] 
        }
    }
    return first

}

console.log(maximum());