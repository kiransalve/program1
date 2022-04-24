let head;

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function segOddEven() {
  let even,
    odd,
    e,
    o = null;
  while (head != null) {
    if (head.val % 2 == 0) {
      if (even == null) {
        even = head;
        e = head;
      } else {
        e.next = head;
        e = e.next;
      }
    } else {
      if (odd == null) {
        odd = head;
        o = head;
      } else {
        o.next = head;
        o = o.next;
      }
    }
    head = head.next;
  }
  if (odd == null || even == null) {
    return;
  }
  e.next = odd;
  o.next = null;
  head = even;
}

function push(new_data) {
  let new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}
function print() {
  while (head) {
    console.log(head.val);
    head = head.next;
  }
}

push(11);
push(10);
push(7);
push(5);
push(4);
push(2);
push(3);
segOddEven();
console.log("Modified List");
print();
