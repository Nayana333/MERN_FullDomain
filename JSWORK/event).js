function add(){
let arr=[7,4,1,2]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        arr[i+1]=arr[i+1]+1
    }
   
}
return arr
}

console.log(add());
