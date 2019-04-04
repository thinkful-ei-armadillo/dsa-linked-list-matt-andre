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
}

main();