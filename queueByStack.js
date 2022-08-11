class Queue{
     
constructor()
{
    this.stack1 = [];
    this.stack2 = [];
}
 
enQueue(x)
{
   
    // copy all values stack1 to stack2
    while (this.stack1.length != 0) // if stack1 is not empty
    {
        this.stack2.push(this.stack1.pop());
    }
 
    // Push item into stack1
    this.stack1.push(x);
 
    // Push everything back to stack1
    while (this.stack2.length != 0)
    {
        this.stack1.push(this.stack2.pop());
        //stack2.pop();
    }
}
 
// Dequeue an item from the queue 
deQueue()
{
     
    // If stack is empty
    if (this.stack1.length == 0)
    {
        return "Q is Empty"
    }
 
    // Return top of stack1
    let x = this.stack1[this.stack1.length - 1];
    this.stack1.pop();
    return x;
}
}
 
let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
 
q.deQueue()
console.log(q);