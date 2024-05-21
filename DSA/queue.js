class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.size=0

    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    enqueue(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.front=node;
            this.rear=node
            this.size++
        }
        else{
            this.rear.next=node
            this.rear=node
        }
        this.size++

    }

    dequeue(){
        if(this.isEmpty()){
            console.log('Queue underflow');
        }else{
        this.first=this.first.next
        }
        this.size--
    }

    print(){
        let listedValues=''
        if(this.isEmpty()){
            return null
        }else{
            let curr=this.front
            while(curr){
                listedValues=`${curr.value} `
                curr=curr.next
            }
            console.log(listedValues);
        }
    }
}