// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.s1 = new Stack()
    this.s2 = new Stack()
  }

  add(item) {
    this.s1.push(item)
  }

  remove(m) {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop())
    }

    const value = this.s2.pop()

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop())
    }

    return value
  }

  peek() {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop())
    }

    const value = this.s2.peek()

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop())
    }

    return value
  }
}
class Queue1 {
  constructor() {
    this.s1 = new Stack()
    this.s2 = null
  }

  add(item) {
    this.s1.push(item)
  }

  _reverseStack(stack) {
    const newStack = new Stack()
    while (stack.peek()) {
      newStack.push(stack.pop())
    }

    return newStack
  }

  remove(item) {
    this.s2 = this._reverseStack(this.s1)
    const value = this.s2.pop()

    this.s1 = this._reverseStack(this.s2)
    this.s2 = new Stack()

    return value
  }

  peek(item) {
    this.s2 = this._reverseStack(this.s1)
    const value = this.s2.peek()

    this.s1 = this._reverseStack(this.s2)
    this.s2 = new Stack()

    return value
  }
}

module.exports = Queue;
