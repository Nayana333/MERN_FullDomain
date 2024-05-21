class Node{
    constructor(){
        this.children={}
        this.isWordEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let curr=this.root;
        for(let i=0;i<=word.length;i++){
            let charToInsert=word[i]
            if(!curr.children.hasOwnProperty(charToInsert)){
                curr.children[charToInsert]=new Set()
            }
           curr=     curr.children[charToInsert]
        }

    }

    contains(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            let charToFind=word[i]
            if(!curr.children.hasOwnProperty[charToFind]){
                return false
            }
            else{
                curr=curr.children[charToFind]
            }
            return curr.isWordEnd
        }
    }

    display(){
        this.displayHelper(this.root," ")
    }
    displayHelper(node,currentString){
        if(node.isWordEnd){
            console.log(currentString);
        }
        for(let char in node.children){
            this.display(node.children[char],currentString+char)
        }
    }

    startWothPrefix(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            let charToFind=word[i]
            if(!curr.children.hasOwnProperty(charToFind)){
                return false
            }
            return curr=curr.children[charToFind]
        }
        return true
    }

    delete(word){
        if(!this.contains(word)){
            console.log('word not found');
        }
        else{
            this.deleteHelper(this.root,word,0)
            console.log('word deleted from trie');
        }
    }

    deleteHelper(node,word,index){
        if(index===word.length){
            node.isWordEnd=true
            return
        }
        let charToDelete=word[index]
        nextNode=this.children[charToDelete]
        this.deleteHelper(nextNode,word,index+1)
        if(Object.keys(nextNode.children).length===0 && nextNode.isWordEnd)
        deleteNode(charToDelete)
    }
}