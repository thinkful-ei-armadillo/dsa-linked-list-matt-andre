const LinkedList = require('./LinkedList');
const DoublyLinkedList = require('./DoublyLinkedList');

const display = (ll) => {
  let tempNode = ll.head;
  let display = [];

  if (!tempNode) {
    return [];
  }

  while (tempNode.next !== null) {
    display.push(tempNode.value);
    tempNode = tempNode.next;
  }

  display.push(tempNode.value);

  return display;
};

const size = (ll) => {
  let tempNode = ll.head;
  let nodeCount = 1;

  if (!tempNode) {
    return 0;
  }

  while (tempNode.next !== null) {
    tempNode = tempNode.next;
    nodeCount++;
  }

  return nodeCount;
};

const isEmpty = (ll) => {
  if (!ll.head) {
    return true;
  }

  return false;
};

const findPrevious = (ll, key) => {
  let prevNode = ll.head;
  let currNode = ll.head;

  if (ll.head === null) {
    return 'the list is empty';
  }

  while (currNode.value !== key && currNode.next !== null) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  return prevNode.value;
};

const findLast = (ll) => {
  let prevNode = ll.head;
  let currNode = ll.head;

  if (ll.head === null) {
    return 'the list is empty';
  }
  if (ll.head.next === null) {
    return ll.head.value;
  }

  while (currNode.next !== null) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  return currNode.value;
};

const reverse = (ll) => {

  let currNode = ll.head;
  let prevNode = null;


  while (currNode !== null) {
    let head = currNode.next;
    currNode.next = prevNode;

    prevNode = currNode;
    currNode = head;
  }


  return new LinkedList(prevNode);

}

// FINISH THIS
const reverseDLL = (dll) => {
  let head = dll.head;
  let currNode = dll.tail;
  let prevNode = dll.tail;

  while(currNode.prev !== head) {
    console.log(currNode);
    currNode = currNode.prev;
  }

  return new DoublyLinkedList(prevNode.next, dll.head);
}

const thirdFromEnd = (ll) => {

  let curr = ll.head
  let count = 0;
  while (curr.next !== null) {
    curr = curr.next;
    count++
  }

  curr = ll.head;
  for (let i = 0; i <= count - 3; i++) {
    curr = curr.next
  }

  return curr.value;
}

const middleList = (ll) => {
  let curr = ll.head
  let count = 0;

  while (curr.next !== null) {
    curr = curr.next;
    count++
  }

  curr = ll.head;
  let middle = Math.floor(count/2);

  for(let i = 0; i <= middle; i++){
    curr = curr.next
  }
  return curr.value
}

const cycle = (ll) => {
  let curr = ll.head;

  while(curr.next !== null){
    if(curr.next === ll.head){
      return true
    }
    curr = curr.next;
  }
  
  return false;
}

// 1 2 3
// 1 -> 2 ===> 1 <- 2

module.exports = {
  display,
  size,
  isEmpty,
  findPrevious,
  findLast,
  reverse,
  reverseDLL,
  thirdFromEnd,
  middleList,
  cycle
};