/* Represent a heap using an array
 * to access the child elements left/right respectively you can use (2n + 1)/(2n + 2) from the current index
 * to access the parent index from the child you can solve backwards and get floor((n - 1) / 2)
 */
class MaxBinaryHeap<T> {
  values: T[]

  constructor(values?: T[]) {
    this.values = values ? values : []
  }

  #getParent(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  #getLeftChild(index: number): number {
    return (2 * index) + 1
  }

  #getRightChild(index: number): number {
    return (2 * index) + 2
  }

  #bubbleUp(): void {
    let index = this.values.length - 1 // Newest node
    let parentIndex = this.#getParent(index) // The parent

    // Swap the parent and new node as long as the new node is bigger than the parent,
    // naturally bubbling up the new node's value to the top of the heap if needed
    // Obviously we cannot go past the 0 index, if we get there the node has bubbled to the root parent
    while (index >= 0 && parentIndex >= 0 && this.values[parentIndex] < this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
      index = parentIndex
      parentIndex = this.#getParent(index)
    }

  }

  #bubbleDown(): void {
    let index = 0
    let leftChildIndex = this.#getLeftChild(index)
    let rightChildIndex = this.#getRightChild(index)

    // Sink index down while its bigger than its children, swapping the children with the index
    // naturally sinking the index value down
    while (index < this.values.length) {
      const value = this.values[index]
      leftChildIndex = this.#getLeftChild(index)
      rightChildIndex = this.#getRightChild(index)
      let swapIndex: number | null = null
      if (leftChildIndex < this.values.length && this.values[leftChildIndex] > this.values[rightChildIndex] && this.values[leftChildIndex] > value) {
        swapIndex = leftChildIndex
      } else if (rightChildIndex < this.values.length && this.values[rightChildIndex] > this.values[leftChildIndex] && this.values[rightChildIndex] > value) {
        swapIndex = rightChildIndex
      }

      if (swapIndex === null) break
      else {
        [this.values[index], this.values[swapIndex]] = [this.values[swapIndex], this.values[index]]
      }

      index = swapIndex

    }
  }

  insert(value: T): MaxBinaryHeap<T> {
    this.values.push(value)
    this.#bubbleUp()
    return this
  }

  remove(): T | undefined {
    if (this.values.length === 0) return undefined
    if (this.values.length === 1) {
      return this.values.pop()
    }

    // Replace the root element with the first element and bubble the smallest value down
    const max = this.values[0]
    const lastElement: T = this.values[this.values.length - 1]
    this.values.length = this.values.length - 1
    this.values[0] = lastElement

    this.#bubbleDown()
    return max
  }

  toString(): string {
    return this.values.toString()
  }
}

const heap = new MaxBinaryHeap<number>()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
console.log(heap.toString())
console.log(heap.remove())
console.log(heap.toString())