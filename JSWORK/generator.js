function *gen(){
    let count=0
    while(count<=10){
        yield count
        count++
    }
}

let newGen=gen()
for(let i of newGen){
    console.log(i);
}