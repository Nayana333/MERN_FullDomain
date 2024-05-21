class hashTable{
    constructor(size){
        this.size=0
        let table=new Array(size)
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(value,key){
        let index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        let index=this.hash(key)
        return this.table[index]
    }

    remove(key){
        let index=this.hash(key)
        this.table[index]=undefined
    }

    disply(){
        for(let i=0;i<=table.length;i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }


}