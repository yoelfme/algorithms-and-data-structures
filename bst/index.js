// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data, root = null) {
    if (!root) root = this

    if (data <= root.data) {
      root.left ? this.insert(data, root.left) : root.left = new Node(data)
    } else {
      root.right ? this.insert(data, root.right) : root.right = new Node(data)
    }
  }

  contains(data, root = null) {
    if (!root) root = this


    if (data === root.data) {
      return root
    } else if (data <= root.data) {
        return (root.left ? this.contains(data, root.left) : null)
    } else {
        return (root.right ? this.contains(data, root.right) : null)
    }
  }
}

module.exports = Node;
