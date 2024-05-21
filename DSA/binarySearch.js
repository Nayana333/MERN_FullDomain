function binary(target,arr){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(arr[mid]===target){
        return mid
    }
    else{
        if(target<arr[mid]){
            right=mid-1
        }
        else{
            left=mid+1
        }
    }
}
    
}

let array=[4,6,4,2,1]
binary(array,6)