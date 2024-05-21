class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.size=0;
        this.head=null
    }
    getSize(){
        return this.size;
    }
    isEmpty(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.size++
        }
        node.next=this.head
        this.head=node
        this.size++
    }

    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.size++
        }
        else{
            let curr=this.head
            while(curr){
                curr=curr.next
            }
            curr.next=node
            this.size++
        }
    }

    print(){
        let listedValue;
        if(this.isEmpty()){
            console.log('empty');
        }
        let curr=this.head
        while(curr){
            listedValue += `${curr.value} `
        }
        console.log(listedValue);
    }

    reverse(){
        if(this.isEmpty()){
            console.log('empty');
        }

        let curr=this.head
        let prev=null
        while(curr){
            let next=curr.next;
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
insert(value,index){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
        this.size++
    }
    else{
        let curr=this.head
        if(index>0 && index<this.size){
            for(let i=0;i<=index-1;i++){
                curr=curr.next;
            }
            node.next=curr.next
            curr.next=node
            this.size++
        }
    }
}

removeIndedx(index){
    if(this.isEmpty()){
        return null
    }
    let removeNode;
    if(index>0 && index<this.size){
        if(index===0){
            removeNode=this.head
            this.head=this.head.next;             
        }
        else{
            let curr=this.head
            for(let i=0;i<=index-1;i++){
              curr=curr.next  
            }
            removeNode=curr.next
            curr.next=removeNode.next
            this.size--

        }
    }
}

removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value===value){
        this.head=this.head.next
        this.size--
        return value
    }
    else{
        let removeNode
        let curr=this.head
        while(curr.next && curr.next.value !==value){
            curr=curr.next
        }
        removeNode=curr.next
        curr.next=removeNode.next
        this.size--

    }

}

}