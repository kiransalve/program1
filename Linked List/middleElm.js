let head;

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function push(new_data) {
  let new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

function findMiddle() {
  let low = head;
  let high = head;
  let flag = 0;
  while (high != null && high.next != null && low != null) {
    low = low.next;
    high = high.next.next;
  }
  console.log("Middle element is ", low.val);
}

function print() {
  let count = 0;
  while (head) {
    console.log(head.val);
    head = head.next;
  }
}
push(1);
push(2);
push(3);
push(4);
push(5);
push(6);

findMiddle();
