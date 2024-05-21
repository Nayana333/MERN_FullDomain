function insertion(arr){
    let numberToInsert;
    for(let i=1;i<arr.length;i++){
        numberToInsert=arr[i];
        j=i-1
        while(j>=0 && arr[j]>numberToInsert)
        arr[j+1]=arr[j]
        j=j-1
        i--
    }
    arr[j+1]=numberToInsert
}


console.log(insertion([4,3,6,1]))