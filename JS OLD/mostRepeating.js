// const map=new Map()

let str='eecxcxzxassssssssssssiiiiiiiiiiiiiiiiiiiiwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'

// for(let i=0;i<str.length;i++){
//     map.set(str[i],(map.get(str[i])||0)+1)
// }

// let count=0;
// let st=''
// map.forEach((key,value)=>{
//     if(key>count){
//         count=key
//         str=value

//     }

// })
// console.log(count,str);


let map=new Map()

for(let i=0;i<str.length;i++){
    map.set(str[i],(map.get(str[i])||0)+1)
}
let count=0
str=''
map.forEach((index,value)=>{
    if(index>count){
        count=index
        str=value
    }
})
    
console.log(str,count);
    