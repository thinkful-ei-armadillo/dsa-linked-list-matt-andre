const LinkedList = require('./LinkedList');
const DoublyLinkedList = require('./DoublyLinkedList');
const helpers = require('./helpers');

function main() {
  const SLL = new LinkedList();
  const CycleLL = new LinkedList();
  const DoubleLL = new DoublyLinkedList();

  // CycleLL.insertLast(1)
  // CycleLL.insertLast(1)
  // CycleLL.insertLast(1)
  // CycleLL.insertLast(1)
  // CycleLL.createCycle();

  // SLL.insertLast('Apollo');
  // SLL.insertLast('Boomer');
  // SLL.insertLast('Helo');
  // SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck');
  // SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('Hotdog', 'Helo');
  // SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');

  // console.log('SLL:', helpers.display(SLL));
  // console.log('Size:', helpers.size(SLL));
  // console.log('Is empty:', helpers.isEmpty(SLL));
  // console.log('Node before Helo:', helpers.findPrevious(SLL, 'Helo'));
  // console.log('Last node:', helpers.findLast(SLL));
  // console.log('The thrid from last is', helpers.thirdFromEnd(SLL))
  // console.log('The middle element is', helpers.middleList(SLL))
  // console.log('Has a cycle', helpers.cycle(CycleLL))
  // console.log('Reversed LL:', helpers.display(helpers.reverse(SLL)));

  DoubleLL.insertLast('Aquaria');
  DoubleLL.insertLast('Caprica');
  DoubleLL.insertLast('Gemenon');
  DoubleLL.insertLast('Picon');
  DoubleLL.insertLast('Sagittaron');
  DoubleLL.insertLast('Tauron');
  DoubleLL.remove('Picon');
  DoubleLL.insertBefore('Before gemenon', 'Gemenon');
  DoubleLL.insertAfter('After tauron', 'Tauron');
  DoubleLL.insertFirst('Optimus');
  DoubleLL.insertAt('Turtle', 1);

  console.log(DoubleLL);

  console.log('Double LL:', helpers.display(DoubleLL));
}

main();


// 4. Mystery program
// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. 
//What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// 1 2 3 3 4
// The function deletes duplicates from a Linked List.
// O(n^2)