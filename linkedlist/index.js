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

  removeLast() {
    let last = this.head
    let previous = null

    while (last && last.next) {
      previous = last
      last = last.next
    }

    if (previous) {
      previous.next = null
    } else {
      this.head = null
    }
  }

  insertLast(data) {
    const node = new Node(data)
    const last = this.getLast()
    if (last) {
      last.next = node
    } else {
      this.head = node
    }
  }

  getAt(index) {
    let counter = 0
    let node = this.head

    while (node && counter < index) {
      counter+=1

      node = node.next
    }

    return node
  }
}

module.exports = { Node, LinkedList };
