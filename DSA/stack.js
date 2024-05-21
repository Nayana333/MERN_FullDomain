class Node{
    constructor(value){
        this.value=value;
        this.top=null
    }
}

class Stack{
    constructor(){
        this.top=null
        this.size=0
    }
    push(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.top=node
            this.size++
        }

        else{
            curr=this.top;
            this.top=node
            this.top.next=curr
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return null
        }
        else{
            this.top=this.top.next
            this.size--
        }
    }
  print(){
    let listedValue
    if(this.isEmpty()){
        return null
    }else{
        curr=this.top;
        while(curr){
            listedValue=`${curr.value} `
            curr=curr.next
        }
        console.log(listedValue);
    }
  }
}