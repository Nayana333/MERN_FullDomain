function sum(...num){
    let count=0;
   for(let n of num){
    count +=n
   }
   return count
}

console.log(sum(3,5,6,4,3,2));