
type NullableTreeNode<T> = TreeNode<T> | null

class TreeNode<T> {

  value: T
  left: NullableTreeNode<T>
  right: NullableTreeNode<T>

  constructor(value: T, left: NullableTreeNode<T>, right: NullableTreeNode<T>) {
    this.value = value
    this.left = left
    this.right = right
  }

}

interface Tree<T> {
  root: NullableTreeNode<T>
  nodes: number
  add(value: T): Tree<T>
  find(value: T): boolean
  toDFSArray(): T[]
  toBFSArray(): T[]
  inorder(callback: (node: TreeNode<T>) => void): Tree<T>
  postorder(callback: (node: TreeNode<T>) => void): Tree<T>
  preorder(callback: (node: TreeNode<T>) => void): Tree<T>
}

class BinaryTree<T> implements Tree<T> {
  root: NullableTreeNode<T> = null
  nodes: number = 0

  toDFSArray(): T[] {
    if (!this.root) return []
    const values: T[] = [];

    (function helper(node: NullableTreeNode<T>) {
      if (node) {
        helper(node.left)
        values.push(node.value)
        helper(node.right)
      }
    })(this.root);

    return values
  }

  toBFSArray(): T[] {
    if (!this.root) return []
    const values: T[] = [];
    const queue: TreeNode<T>[] = [];
    queue.push(this.root)
    while (queue.length) {
      const node = queue.shift()
      if (node) {
        values.push(node.value)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    return values
  }

  find(value: T): boolean {
    let current = this.root

    while (current !== null) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        // Found it!
        break
      }
    }

    return current !== null
  }

  add(value: T): Tree<T> {
    const node = new TreeNode<T>(value, null, null)
    if (!this.root) {
      this.root = node
    } else {
      let current = this.root
      while (true) {
        if (node.value < current.value) {
          if (current.left === null) { current.left = node; break }
          current = current.left
        } else if (value > current.value) {
          if (current.right === null) { current.right = node; break }
          current = current.right
        } else {
          break
        }
      }
    }

    this.nodes++
    return this
  }

  inorder(callback: (node: TreeNode<T>) => void): Tree<T> {
    (function helper(node: NullableTreeNode<T>) {
      if (node) {
        helper(node.left)
        callback(node)
        helper(node.right)
      }
    })(this.root);
    return this
  }

  postorder(callback: (node: TreeNode<T>) => void): Tree<T> {
    (function helper(node: NullableTreeNode<T>) {
      if (node) {
        helper(node.left)
        helper(node.right)
        callback(node)
      }
    })(this.root);
    return this
  }

  preorder(callback: (node: TreeNode<T>) => void): Tree<T> {
    (function helper(node: NullableTreeNode<T>) {
      if (node) {
        callback(node)
        helper(node.left)
        helper(node.right)
      }
    })(this.root);
    return this
  }
}

const tree = new BinaryTree<number>()
console.log(tree)
tree.add(10).add(9).add(11).add(5).add(8).add(15).add(18).add(13)
console.log(tree)
console.log(tree.find(11))
console.log(tree.toDFSArray())
console.log(tree.toBFSArray())
tree.preorder((item) => console.log(item.value))
tree.postorder((item) => console.log(item.value))
tree.inorder((item) => console.log(item.value))