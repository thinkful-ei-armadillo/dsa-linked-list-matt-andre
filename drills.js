const LinkedList = require('./LinkedList');

// linked list helper functions
const display = (ll) => {
  let tempNode = ll.head;
  let display = [];

  if(! tempNode) {
    return [];
  }

  while(tempNode.next !== null) {
    display.push(tempNode.value);
    tempNode = tempNode.next;
  }

  display.push(tempNode.value);

  return display;
};

const size = (ll) => {
  let tempNode = ll.head;
  let nodeCount = 1;

  if(! tempNode) {
    return 0;
  }

  while(tempNode.next !== null) {
    tempNode = tempNode.next;
    nodeCount++;
  }

  return nodeCount;
};

const isEmpty = (ll) => {
  if(! ll.head) {
    return true;
  }

  return false;
};

const findPrevious = (ll, key) => {
  let prevNode = ll.head;
  let currNode = ll.head;

  if(ll.head === null) {
    return '';
  }

  while(currNode.value !== key) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  return prevNode.value;
};

const findLast = (ll) => {
  let prevNode = ll.head;
  let currNode = ll.head;

  if(ll.head.next === null) {
    return ll.head;
  }
  if(ll.head === null) {
    return '';
  }

  while(currNode.next !== null) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  return currNode.value;
};


function main() {
  const SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  console.log('SLL:', display(SLL));
  console.log('Size:', size(SLL));
  console.log('Is empty:', isEmpty(SLL));
  console.log('Node before Helo:', findPrevious(SLL, 'Helo'));
  console.log('Last node:', findLast(SLL));
}

main();