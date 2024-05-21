// function extract(){
//     let str='-+919900009999'
//     for(let i=0;i<=str.length;i++){
//         if(!isNaN(str[i])){
//             console.log(str[i]);
//         }

//     }
// }

// extract()



function extract(){
    let str='-+919900009999'
let newArr=[]
    for(let i=0;i<str.length;i++){
        if(!isNaN(str[i])){
            newArr.push(str[i])
        }
    }
    console.log(newArr.join(''));
}

extract()