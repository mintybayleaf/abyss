type NodeOrNull = (SNode | null)

class SNode {
  value: any
  next: NodeOrNull

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  head: NodeOrNull
  tail: NodeOrNull
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  prepend(value: number) {
    const node = new SNode(value)

    if (this.head === null) {
      this.head = node
      this.tail = this.head
    } else {
      node.next = this.head
      this.head = node
    }

    this.length++
    return this
  }

  append(value: number) {
    const node = new SNode(value)

    if (this.head === null || this.tail === null) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++
    return this
  }

  pop() {
    if (this.head === null || this.tail === null) return

    let current: NodeOrNull = this.head
    let next: NodeOrNull = this.head

    while (current != this.tail) {
      current = current?.next

    }

    this.tail = node

    this.length--
    return this
  }
}

const ls = new SinglyLinkedList()
ls.prepend(2).append(3).append(4).prepend(1).pop().pop()
console.log(ls)
