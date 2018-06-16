// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    const node = new Node(data, this.head)
    this.head = node
  }

  size() {
    let node = this.head
    let size = 0

    while (node) {
      size += 1

      node = node.next
    }

    return size
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let last = this.head

    while (last && last.next) {
      last = last.next
    }

    return last
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.head = this.head && this.head.next
  }
}

module.exports = { Node, LinkedList };
