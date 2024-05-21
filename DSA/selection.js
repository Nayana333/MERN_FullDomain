function selection(arr){
    let min;
    for(let i=0;i<=arr.length;i++){
        min=i;
       for(let j=i+1;i<=arr.length;j++){
        if(arr[i>arr[j]]){
            min=j;
        }
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
       }
    }
    return arr
}