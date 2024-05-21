// function asyncTask1(callback){
//     setTimeout(()=>{
//         console.log('asyncTask1');
//     },1000)
//     callback()
// }

// function asyncTask2(callback){
//     setTimeout(()=>{
//         console.log('asyncTask2');
//     },2000)
//     callback()
// }

// asyncTask1(function(){
//     asyncTask2(function(){
//         console.log('completed');
//     })
// })


// function greet(){
//     const id=setInterval(()=>{
//         console.log('intervel');
//     },1000)

//    setTimeout(()=>{
//     clearInterval(id)
//    },4000)
// }

// greet()

// let today=new Date()
// today.setDate(today.getDate()+17)
// console.log(today);

// let arr=[6,5,3,6]
// let newArr=JSON.parse(JSON.stringify(arr))
// console.log(newArr);

// let dig='4$%23156&8'
// let newArr=[]
// let split=dig.split('')
// for(let i=0;i<split.length;i++){
//     if(!isNaN(dig[i])){
//         newArr.push(dig[i])
//     }
// }
// newArr.join('')
// console.log(newArr);


// function missing(arr){

//     let min=Math.min(...arr)
//     let max=Math.max(...arr)
//     for(let i=min;i<max;i++){
//         if(arr.indexOf(i)<0){
//             console.log(i);
//         }
//     }

// }

// missing([5,7,3,1,2])


// function repeatingeEle(arr){
//     let map=new Map()
//     for(let i=0;i<arr.length;i++){
//         map.set(arr[i],(map.get(arr[i])||0)+1)

//     }

//     for(let j of map){

//     }
//     let count=0
//     let obj=new Map()
//     map.forEach((index,item)=>{
//         if(index>count){
//           count=index;
//           obj.set(coun,item)
//         }
//     })

//   console.log(...obj.entries());


    
// }

// repeatingeEle([8,6,6,7,5,5,3,1,2])

    // function promise(){
    
    //     return new Promise((resolve,reject)=>{
    //         let n=true;
    //         if(n===true){
    //             resolve('success')
    //         }
    //         else{
    //             reject('failure')
    //         }
    //     })


    // }

    // promise().then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })


// const promise1=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise 1')
        
//     },2000)
// })
// const promise2=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise 2')
//     },1000)
// })

// Promise.all([promise1,promise2]).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// function random(){
//     let r=''
//    for(let i=0;i<6;i++){
//     r +=Math.floor(Math.random()*10)
//    }
//    console.log(r);
// }
// random()

// function sum(...num){
//     let count=0
//     for(let n of num){
//         count +=n
//     }
//     console.log(count);
// }

// sum(4,6,7,8,3,2)


// function multiply(arr){
//     if(arr.length<=0){
//         return 1
//     }
//     return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1))
// }

// console.log(multiply([5,7,3,1]));

// function duplicate(arr){

//     let duplicate=arr.filter((item)=>{
//       return  arr.indexOf(item)===arr.lastIndexOf(item)
//     })
//     console.log(duplicate);

// }

// duplicate([7,9,4,7,9,5,3])

// function reverseString(str){
//     if(str===''){
//         return str
//     }
//     return reverseString(str.substr(1))+str.charAt(0)
// }

// console.log(reverseString(';nayana'))

// function findVowels(str){

//     let vowel=['a','e','e','i','o','u']
//     let split=str.split('')
//     for(let i=0;i<split.length;i++){
//         if(vowel.includes(split[i])){
//            split[i]= split[i].toUpperCase()
//         }
//     }
//     console.log(split.join(''));


    
// }

// findVowels('uniform')