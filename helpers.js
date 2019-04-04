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
    return 'the list is empty';
  }

  while(currNode.value !== key && currNode.next !== null) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  return prevNode.value;
};

const findLast = (ll) => {
  let prevNode = ll.head;
  let currNode = ll.head;
  
  if(ll.head === null) {
    return 'the list is empty';
  }
  if(ll.head.next === null) {
    return ll.head.value;
  }

  while(currNode.next !== null) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  return currNode.value;
};

module.exports = {
  display,
  size,
  isEmpty,
  findPrevious,
  findLast,
};