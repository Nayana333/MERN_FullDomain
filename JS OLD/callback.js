function greet(name,callback){
    console.log(`this is greet for ${name}`);
    callback()
}
function morning(){
    console.log('good morning');
}

greet('nayana',morning)