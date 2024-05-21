function objects(){
    let obj={
        name:'nayana',
        place:'valayancjirangara'
    }
    let obj2={
        name:'na',
        place:'valayancjirangara'
    }
    
    if(obj.length!==obj2.length0){
        console.log('not equal');
    }
    else{
       let entries1=Object.entries(obj)
       let entries2=Object.entries(obj2)
       if(JSON.stringify(entries1)===JSON.stringify(entries2)){
        console.log('equal');
       }
       else{
        console.log('not equal');
       }
    }
}

objects()