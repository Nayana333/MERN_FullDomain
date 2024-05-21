let arr=[5,7,4,45,5,7,1,2]
let duplicate=arr.filter((item)=>{
  return  arr.indexOf(item)!==arr.lastIndexOf(item)
})
console.log(duplicate); 