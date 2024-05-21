function linear(arr,target){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

linear([3,6,7,4,2],7)