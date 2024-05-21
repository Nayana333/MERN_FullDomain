let arr=[8,5,3,4,1]
let newArr=[...arr]
console.log(newArr);

let deep=JSON.parse(JSON.stringify(arr))

deep.push(1000)
console.log(deep);