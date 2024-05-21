let arr=[9,6,5,4,8]
const newarr=arr.map((value,key,array)=>{
   console.log(`${key}=>${value}`);
})

const newArray=arr.filter((value,index)=>{
    if(value%2===0){
        return value
    }

})

console.log(newArray);

arr.forEach((item,index)=>{


    console.log(`${item}=>${index}`);


})