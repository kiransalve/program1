class queue {
  constructor() {
    this.queue = [];
    this.minpos = 0;
    this.maxpos = 0;
  }
  push(val) {
    this.queue.push(val);
    this.maxpos = this.maxpos + 1;
  }
  displayque() {
    console.log(this.queue);
    console.log(this.minpos);
    console.log(this.maxpos);
  }
  pop() {
    if (this.minpos < this.maxpos) {
      const item = this.queue[this.minpos];
      delete this.queue[this.minpos];
      this.minpos++;
      return this.minpos;
    } else {
      console.log("array is empty");
    }
  }
  size() {
    return this.queue.length;
  }
  peek() {
    return this.queue[this.minpos];
  }
}

const qu1 = new queue();

qu1.push(1);
qu1.push(3);
qu1.displayque();
//qu1.size();
qu1.peek();
// qu1.pop();
// qu1.displayque();

// qu1.pop();
// qu1.displayque();

// qu1.pop();
// qu1.displayque();

// qu1.pop();
// qu1.displayque();
