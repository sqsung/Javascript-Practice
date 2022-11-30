function Graph() {
    this.edge = {};
    this.visited = {};
}

Graph.prototype.addVertex = function(v) {
    this.edge[v] = [];
    this.visited[v] = false;
}

Graph.prototype.addEdge = function(v1, v2) {
    this.edge[v2].push(v1);
    this.edge[v1].push(v2);
}

Graph.prototype.dfs = function(vertex) {
    if (this.visited[vertex]) return;
    
    this.visited[vertex] = true;
    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
        this.dfs(neighbors[i]);
    }
}

function solution(v, eList) {
    let result = 0;
    let g = new Graph();

    for(let i = 0; i <= v; i++) {
        g.addVertex(i);
    }

    for(let i = 0; i < eList.length; i++) {
        let e = eList[i];
        g.addEdge(e[0], e[1]);
    }

    g.dfs(1);

    for(let vertex in g.visited) {
        result += g.visited[vertex] ? 1 : 0;
    }

    return result;
}

console.log(solution(7, [[1,2], [2,3], [1,5], [1,5], [5,2], [5,6], [4,7]]));