const arr=[8,6,4,8,2,0,1,4,4]

// const newArr=arr.filter((item)=>{
//     return item%2===0
// })

// const newArr=arr.reduce((curr,acc)=>{
//   return  curr>acc?curr:acc
// },0)


// arr.forEach((item)=>{
//     console.log(item);
// })


arr.splice(1,1,12)
console.log(arr);