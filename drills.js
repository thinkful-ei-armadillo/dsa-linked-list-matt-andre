const LinkedList = require('./LinkedList');
const helpers = require('./helpers');

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

  console.log('SLL:', helpers.display(SLL));
  console.log('Size:', helpers.size(SLL));
  console.log('Is empty:', helpers.isEmpty(SLL));
  console.log('Node before Helo:', helpers.findPrevious(SLL, 'Helo'));
  console.log('Last node:', helpers.findLast(SLL));
  console.log('Reversed LL:', helpers.reverse(SLL));

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