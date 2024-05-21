function outer(){
    let str='nayana'
    function inner(){
        console.log(str);
    }
    return inner
}

let output=outer()
console.log(output());