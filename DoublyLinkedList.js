class _DoubleNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  insertFirst(item) {
    let tempNode = this.head;
    let newNode = new _DoubleNode(item, tempNode, this.tail);

    if(tempNode !== null) {
      tempNode.prev = newNode;
    }
    this.head = newNode;
    //this.tail = new _DoubleNode(item, this.tail, this.head);
  }

  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;

      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }

      this.tail = new _DoubleNode(item, null, tempNode);
      tempNode.next = this.tail;
    }
  }

  insertBefore(item, key) {
    let newNode = new _DoubleNode(item, null);
    let prevNode = this.head;
    let currNode = this.head;

    if(this.head === null) {
      this.insertFirst(newNode);
    }


    while(currNode !== null && currNode.value !== key) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null) {
      console.log('node not found');
    }

    newNode.next = currNode;
    newNode.prev = currNode.prev;
    prevNode.next.prev = newNode;
    prevNode.next = newNode;
  }

  insertAfter(item, key) {
    let newNode = new _DoubleNode(item, null);
    let prevNode = this.head;
    let currNode = this.head;

    if(this.head === null) {
      this.insertFirst(newNode);
    }

    while(currNode.value !== key) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if(currNode.next === null) {
      console.log('node not found');
    }

    newNode.next = currNode.next;
    newNode.prev = currNode;
    currNode.next = newNode;
  }

  insertAt(item, pos) {
    let newNode = new _DoubleNode(item, null);
    let prevNode = this.head;
    let currNode = this.head;
    let currNodePos = 0;

    if(this.head === null) {
      this.insertFirst(newNode);
    }

    while(currNodePos !== pos) {
      prevNode = currNode;
      currNode = currNode.next;
      currNodePos++;
    }

    if(currNode.next === null) {
      console.log('node not found');
    }

    newNode.next = currNode;
    newNode.prev = prevNode;
    currNode.next.prev = newNode;
    prevNode.next = newNode;
  }

  find(item) {
    let currNode = this.head;

    if(! this.head) {
      return null;
    }

    while(currNode.value !== item) {
      if(currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }

    return currNode;
  }

  remove(item) {
    if(! this.head) {
      return null;
    }

    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null) {
      console.log(`cannot find item ${item}`);
      return;
    }

    previousNode.next = currNode.next;
    previousNode.prev = currNode.prev;
  }
}

module.exports = DoublyLinkedList;