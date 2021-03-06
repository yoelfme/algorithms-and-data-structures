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

    while (node) {
      if (counter === index) {
        return node
      }
      counter+=1

      node = node.next
    }

    return null
  }

  removeAt(index) {
    if (index === 0) {
      this.removeFirst()
    } else {
      const previous = this.getAt(index - 1)

      if (previous) {
        previous.next = previous.next && previous.next.next
      }
    }
  }

  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data)
    } else {
      const previous = this.getAt(index - 1)

      if (previous) {
        const node = new Node(data, previous.next)

        previous.next =  node
      } else {
        this.insertLast(data)
      }
    }
  }

  forEach(callback) {
    let counter = 0
    let node = this.head


    while(node) {
      callback(node, counter)

      counter++
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head

    while (node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
