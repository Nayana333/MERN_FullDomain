function stringRev(str){
    let stack=[]
    let splitString=str.split(' ')
    for(let i of splitString){
       stack.push(i)

    }
    let string=''
    while(stack.length>0){
        string +=' '+stack.pop()

    }
    return string.trim()
}

console.log(stringRev('hello nayana'));