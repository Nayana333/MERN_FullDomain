class Node{
    constructor(value){
        this.next=null;
        this.prev=null;
        this.value=value

    }
}
class Doubly{
    constructor(){
        this.head=null;
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node
            this.size++          
        }
        else{
            this.head.prev=node
            node.next=this.head
            this.size++
        }
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=value;
            this.tail=value
            this.size++
        }
        else{
            this.tail.next=node
            node.prev=this.tail;
            this.size++
        }
    }

    print(){
        let listedValue
        if(this.isEmpty()){
            return null
        }
        let curr=this.head
        while(curr){
            listedValue=`${curr.value} `
            curr=curr.next
        }
        console.log(listedValue);
    }
    removeFront(){
        let removeNode
        if(this.isEmpty()){
            return null
        }
        else{

            removeNode=this.head.value
            this.head=this.head.next
            this.size--
            
        }
    }

    removeEnd(){
        let removeNode
        if(this.isEmpty()){
            return null
        }
     else{
        removeNode=this.tail
        this.tail.prev=this.tail;
        this.size--
     }
    }
}