const secMaximum=(arr)=>{
    let first=-Infinity;
    let sec=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            sec=first
            first=arr[i]
          
        }
        if(arr[i]>sec && arr[i]<first){
            sec=arr[i]
        }
    }
    return sec

}

console.log(secMaximum([8,6,9,3,1]));