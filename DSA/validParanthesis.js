function Valid(s){
    const stack=[]
    for(let char of s ){

        if(char==='(' || char==='{' || char==='['){
            stack.push(char)
        }
     else if(char===')' || char==='}' || char===']'){
            let prev=stack.pop()
        
        if((char===')' && prev!=='(') || (char==='}' && prev!=='{') && (char===']' && prev!=='[')){
            return false
        }
        else{
            return true
        }
    }
    }
}

string='{[]}})'

console.log(Valid(string));