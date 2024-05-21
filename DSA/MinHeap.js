class heap{
    constructor(){
        this.heap=[]
    }
    getparentIndex(index){
        return Math.floor((index-1)/2)

    }
    getLeftChildIndex(index){
        return Math.floor(2*index+1)      
    }
    getRighthildIndex(index){
        return Math.floor(2*index+2)
    }
    swap(index1,index2){
        let temp=this.heap[index1]
        this.heap[index2]=this.heap[index1]
        this.heap[index2]=temp
    }

    heapifyUp(index){
        let parentIndex=this.getparentIndex(index)
        if(parentIndex>0 && this.heap[parentIndex]>this.heap[index]){
            this.swap(parentIndex,index)
            this.heapifyUp(parentIndex)
        }
    }
    heapifyDOwn(index){
        let leftChild=this.getLeftChildIndex(index)
        let rightChild=this.getRighthildIndex(index)
        minIndex=index
        if(leftChild<this.heap.length && this.heap[leftChild]<this.heap[minIndex])
        {
            minIndex=leftChild
        }
        if(rightChild<this.heap.length && this.heap[rightChild]<this.heap[minIndex]){
            minIndex=rightChild
        }
        if(minIndex!=index){
            this.swap(index,minIndex)
            this.heapifyDOwn(minIndex)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    remove(){
        if(this.heap.length===0){
            return null

        }
        else{
            if(this.heap.length===1){
                return this.heap.pop()
            }
            let min=this.heap[0]
            this.heap[0]=this.heap.pop()
            this.heapifyDOwn(0)
            return min
        }
    }

    sort(){
        let sorted=[]
        while(this.heap.length>0){
            sorted.push(this.remove())
        }
    }


    buildHeapfromArray(array){
        this.heap=array
        let FirstChildIndex=Math.floor((array.length-2)/2)
        for(let i=FirstChildIndex;i>=0;i--){
            this.heapifyDOwn(i)
        }
    }
    
}