


function removeDuplicate(str){
let duplicate=new Set()
    let hash={}

    let split=str.split('')
    for(let i=0;i<split.length;i++){
        hash[i]=str[i]
      
    }
    

   for(let i in hash){

    duplicate.add(hash[i])
   
    
   }
   console.log(duplicate);

 
}
removeDuplicate('asdfghjkertyutafdwd')
