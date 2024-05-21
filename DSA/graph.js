class  Graph{
    constructor(){
        this.adjacentList={}

    }
    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }
        if(this.adjacentList[vertex2]){
            this.adjacentList[vertex2]
        }
        this.adjacentList[vertex1]=add(vertex2)
        this.adjacentList[vertex2]=add(vertex2)
    }

    hasEdge(vertex1,vertex2){
        return (this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1))
    }

    deleteEdge(vertex1,vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }
    deleteVertex(vertex){
        if(!this.adjacentList[vertex])
        {
            return
        }
        for(let adjacentVertex in this.adjacentList[vertex]){
            this.deleteEdge(adjacentVertex)
        }
        delete this.adjacentList[vertex]
    }

    display(){
        for(let adjacentVertex of this.adjacentList){
            console.log(vertex ,'-->',[...this.adjacentList[adjacentVertex]]);
        }
    }
    dfs(startVertex,visited){
        if(!this.adjacentList[startVertex]){
        return startVertex
        }
        console.log(startVertex);
        visited[startVertex]=true
        for(let neighbour of this.adjacentList[startVertex]){
            if(!visited[neighbour]){
                this.dfs(neighbour,visited)
            }
        }
    }

    bfs(startVertex){
        let queue=[startVertex]
        let visited={[startVertex]:true}
        while(queue.length>0){
            let current=queue.shift()
            for(let neighbour of this.adjacentList[current]){
                if(!visited[neighbour]){
                    visited[neighbour]=true
                    queue.push(neighbour)
                }
            }
        }
    }

    
}