const { log } = require("console")

function highest(){
    let arr=[9,6,0,4,6]
    let newarr=arr.sort((a,b)=>b-1)
    let sum=newarr[0]+newarr[1]
    console.log(sum);

}

highest()