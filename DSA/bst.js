class Node{
    constructor(value){
        this.right=null;
        this.left=null
        this.value=value
    }
}

class Binary{
    constructor(){
        this.size=0
        this.root=null
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    insert(value){
        if(this.isEmpty()){
            this.root=Node
            this.size++
            return this
        }
        else{
            let curr=this.root
            if(value<curr.value){
                if(curr.left===null){
                    curr.left=node
                    this.size++
                }
                curr=curr.left   
            }
            if(value>curr.value){
                if(curr.right===null)
                {
                    curr.right=node;
                    this.size++
                    
                }
                else{
                    curr=curr.right
                }
            }

        }

    }

    search(root,value){
        if(this.isEmpty()){
            return null
        }
        if(value===this.root.left){
            return true
        }
      else if(value<root.value){
        return this.search(root.left,value)
      }
       
      else{
        return this.search(root.right,value)
      }
    }

    isValid(min,max,root){
        if(!root){
            return true
        }
        root.value>min && root.value<max

        return(this.isValid(root.left,min,root.value) && (isValid(root.right,max,root.value)))
    }

    closest(value){
        let current=this.root
        let closest=Infinity
        while(current){
            if(Math.abs(current.value-target) && (Math.abs(current.value-closest))){
                closest=current.value
            }
            if(current.value<value){
                current=current.right
            }
            if(current.value>value){
                current=current.left
            }
        }
        return closest

    }

    minValue(){
        let node=this.root
        if(!node){
            return null
        }
        while(node.left){
            node=node.left
        }
        return node.left
    }

    maxValue(){
        let node=this.root
        if(!node){
            return null
        }
        while(node.right){
            node=node.right
        }
        return node.right
    }
    
}
