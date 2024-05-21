function vowels(){
    let obj={
        name:'Abcde',
        place:'valay'

    }

    let vowels=['a','e','i','o','u']
    for(let key in obj){
        let value=obj.key.split('')
        for(let i=0;i<value;i++){
            if(vowels.includes(value[i])){
                vowels.splice(value[i],1)
            }
        }
    }
}