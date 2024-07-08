class Graph<T> {
  list: Map<T, Set<T>>

  constructor() {
    this.list = new Map<T, Set<T>>()
  }

  addVertex(vertex: T): Graph<T> {
    if (!this.list.has(vertex)) {
      this.list.set(vertex, new Set<T>())
    }
    return this
  }

  addEdge(vertex: T, otherVertex: T): Graph<T> {
    const vertices = this.list.get(vertex)
    if (vertices) {
      this.list.set(vertex, vertices.add(otherVertex))
    }
    const otherVertices = this.list.get(otherVertex)
    if (otherVertices) {
      this.list.set(otherVertex, otherVertices.add(vertex))
    }
    return this
  }

  removeEdge(vertex: T): Graph<T> {
    if (this.list.has(vertex)) this.list.delete(vertex)
    for (const vertices of this.list.values()) {
      vertices.delete(vertex)
    }
    return this
  }

  DFSRecursive(start: T): T[] {
    const visited: Set<T> = new Set<T>();
    const path: T[] = [];
    const list: Map<T, Set<T>> = this.list;

    (function dfs(vertex: T) {
      if (!vertex) return null
      visited.add(vertex)
      path.push(vertex)
      const vertices = list.get(vertex) || []
      for (const v of vertices) {
        if (!visited.has(v)) {
          dfs(v)
        }
      }
    })(start);

    return path
  }

  DFSIteratively(start: T): T[] {
    const visited: Set<T> = new Set<T>()
    const path: T[] = []
    const stack: T[] = [start]

    while (stack.length) {
      const vertex = stack.pop()
      if (vertex) {
        path.push(vertex)
        visited.add(vertex)
        this.list.get(vertex)?.forEach((v) => {
          if (!visited.has(v)) {
            visited.add(v)
            stack.push(v)
          }
        })
      }
    }

    return path
  }

  BFS(start: T): T[] {
    const queue: T[] = [start]
    const path: T[] = []
    const visited: Set<T> = new Set<T>()

    while (queue.length) {
      const vertex = queue.shift()
      if (vertex) {
        path.push(vertex)
        visited.add(vertex)
        this.list.get(vertex)?.forEach((v) => {
          if (!visited.has(v)) {
            visited.add(v)
            queue.push(v)
          }
        })
      }
    }

    return path
  }
}

const graph = new Graph<string>()
graph.addVertex('A').addVertex('B').addVertex('C').addVertex('D').addVertex('E').addVertex('F')
graph.addEdge('A', 'B').addEdge('A', 'C').addEdge('B', 'D').addEdge('D', 'E').addEdge('D', 'F').addEdge('E', 'F')
console.log(graph.DFSRecursive('A'))
console.log(graph.DFSIteratively('A'))
console.log(graph.BFS('A'))