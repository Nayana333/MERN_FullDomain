// function vowels(){
//     let obj={
//         name:'Abcde',
//         place:'valay'

//     }

//     let vowels=['a','e','i','o','u']
//     for(let key in obj){
//         let value=obj.key.split('')
//         for(let i=0;i<value;i++){
//             if(vowels.includes(value[i])){
//                 vowels.splice(value[i],1)
//             }
//         }
//     }
//}

function vowels(){let vowels=['a','e','i','o','u']
 let obj={
    name:'aeowbdi',
    place:'lksjjioaeuadfg'
    
 }

let entries=[]
let vowelArr=new Set()
for(let i in obj){
    entries.push(obj[i])
}
 for(let i=0;i<entries.length;i++){
    let split=entries[i].split('')
    for(let j=0;j<split.length;j++){
        if(vowels.includes(split[j])){
            vowelArr.add(split[j])
        }
    }
   
 }
 console.log(vowelArr);

}
vowels()
