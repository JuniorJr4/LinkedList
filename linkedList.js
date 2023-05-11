class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
      newNode.nextNode = null;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      //if list is empty make new node the head and tail
      this.head = newNode;
      //this.tail = newNode;
      //this.tail.nextNode = newNode;
    } else {
      // set pointer to current head
      newNode.nextNode = this.head;
      // update head to new node
      this.head = newNode;
    }
  }

  size() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      counter++;
      currentNode = currentNode.nextNode;
    }
    return counter;
  }
  at(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      counter++;
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  pop() {
    let currentNode = this.head;
    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
    this.tail = currentNode;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  find(value) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      index++;
      currentNode = currentNode.nextNode;
    }
  }
  toString() {
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
      str += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    return str + " null";
  }
  insertAt(index, value) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      counter++;
      currentNode = currentNode.nextNode;
    }
    const newNode = new Node(value);
    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }
  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
    } else {
      let currentNode = this.head;
      let previousNode = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
        currentIndex++;
      }
      previousNode.nextNode = currentNode.nextNode;
    }
  }
}

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);

myList.prepend(30);
myList.prepend(20);
myList.prepend(10);
// console.log(myList);
// console.log(myList.at(0));
// console.log(myList.tail);
console.log(myList.toString());
myList.removeAt(6);
console.log(myList.toString());
//myList.pop();
// console.log(myList.size());
// console.log(myList.contains(5));
// console.log(myList.contains(6));
// console.log(myList.find(10));
