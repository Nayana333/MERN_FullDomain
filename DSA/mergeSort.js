function mergeSort(arr){
    if(arr.length<=2){
        return arr
    }
    let mid=Math.floor((arr.length)/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(leftArr,rightArr){
    const sorted=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sorted.push(leftArr.shift())
        }else{
            sorted.push(rightArr.shift())

        }
    }
    return[...sorted,...leftArr,...rightArr]
}