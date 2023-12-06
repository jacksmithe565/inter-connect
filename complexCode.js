/* 
Filename: complexCode.js
Content: Complex JavaScript Code
*/

// Complex code starts here
const complexCode = (() => {
  // Helper function to convert string to uppercase
  const toUpperCase = (str) => {
    return str.toUpperCase();
  };

  // Custom Data Structure - LinkedList
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    append(data) {
      const newNode = new Node(data);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }

      this.tail.next = newNode;
      this.tail = newNode;
    }

    prepend(data) {
      const newNode = new Node(data);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }

      newNode.next = this.head;
      this.head = newNode;
    }

    delete(data) {
      let currentNode = this.head;

      if (currentNode.data === data) {
        this.head = currentNode.next;
        return;
      }

      let previousNode = currentNode;
      currentNode = currentNode.next;

      while (currentNode) {
        if (currentNode.data === data) {
          previousNode.next = currentNode.next;

          if (currentNode === this.tail) {
            this.tail = previousNode;
          }
          return;
        }

        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    reverse() {
      let currentNode = this.head;
      let previousNode = null;
      let nextNode = null;

      while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
      }

      this.tail = this.head;
      this.head = previousNode;
    }
  }

  // Complex Business Logic - Fibonacci Sequence Generator
  const fibonacciGenerator = (n) => {
    const sequence = [];

    if (n >= 1) sequence.push(0);
    if (n >= 2) sequence.push(1);

    for (let i = 2; i < n; i++) {
      const num = sequence[i - 1] + sequence[i - 2];
      sequence.push(num);
    }

    return sequence;
  };

  // Public Methods and Variables
  return {
    toUpperCase,
    LinkedList,
    fibonacciGenerator,
  };
})();

// Usage of Complex Code
console.log(complexCode.toUpperCase("hello")); // Output: "HELLO"

const linkedList = new complexCode.LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
linkedList.reverse();
linkedList.delete(2);

console.log(linkedList); // Output: LinkedList { head: Node { data: 1, next: null }, tail: Node { data: 0, next: [Circular] } }

const fibSequence = complexCode.fibonacciGenerator(10);
console.log(fibSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]