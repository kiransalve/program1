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

function detectLoop() {
  let low = head;
  let high = head;
  let flag = 0;
  while (high != null && high.next != null && low != null) {
    low = low.next;
    high = high.next.next;

    if (low === high) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) {
    console.log("Loop Found");
  } else {
    console.log("Loop not found");
  }
}

function print() {
  while (head) {
    console.log(head.val);
    head = head.next;
  }
}
push(20);
push(4);
push(15);
push(10);

head.next.next.next.next = head;

detectLoop();
