class DQueNode
{
    constructor()
    {
        this.value = 0;
         this.next = null;
        this.prev = null;
    }
}
 
class deque
{
    constructor()
    {
        this.head = null;
        this.tail=null;
    }
     
    // If stack is empty
    isEmpty()
    {
        if (this.head == null)
            return true;
              
        return false;
    }
     
    // size of stack
    size()
    {
        if (!this.isEmpty())
        {
            let temp = this.head;
            let len = 0;
              
            while (temp != null)
            {
                len++;
                temp = temp.next;
            }
            return len;
        }
        return 0;
    }
     
    // Insert at the first position
    insert_first(element)
    {
     
        // Allocating node of DQueNode type
        let temp = new DQueNode();
        temp.value = element;
  
        // If the element is first element
        if (this.head == null)
        {
            this.head = this.tail = temp;
            temp.next = temp.prev = null;
        }
        else
        {
            this.head.prev = temp;
            temp.next = this.head;
            temp.prev = null;
            this.head = temp;
        }
    }
     
    // Insert at last position of deque
    insert_last(element)
    {
        // Allocating node of DQueNode type
        let temp = new DQueNode();
        temp.value = element;
  
        // If element is the first element
        if (this.head == null)
        {
            this.head = this.tail = temp;
            temp.next = temp.prev = null;
        }
        else
        {
            this.tail.next = temp;
            temp.next = null;
            temp.prev = this.tail;
            this.tail = temp;
        }
    }
     
    // Remove element at the first position
    remove_first()
    {
     
        // If list is not empty
        if (!this.isEmpty())
        {
            let temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
  
            return;
        }
        console.log("List is Empty");
    }
     
    // Remove element at the last position
    remove_last()
    {
        // If list is not empty
        if (!this.isEmpty())
        {
            let temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
  
            return;
        }
        console.log("List is Empty");
    }
     
    // Displays the elements in deque
    display()
    {
        // If list is not empty
        if (!this.isEmpty())
        {
            let temp = this.head;
              
            while (temp != null)
            {
                console.log(temp.value + " ");
                temp = temp.next;
            }
  
            return;
        }
        console.log("List is Empty");
    }
}
 
// Class to implement stack using Deque
class Stack
{
    constructor()
    {
        this.d= new deque();   
    }
     
     
    // push to push element at top of stack
    // using insert at last function of deque
    push(element)
    {
        this.d.insert_last(element);
    }
     
    // Returns size
    size()
    {
        return this.d.size();
    }
     
    // pop to remove element at top of stack
    // using remove at last function of deque
    pop()
    {
        this.d.remove_last();
    }
     
    // Display
    display()
    {
        this.d.display();
    }
}
 
// Class to implement queue using deque
class Queue
{
    constructor()
    {
        this.d = new deque();
    }
    // enqueue to insert element at last
    // using insert at last function of deque
    enqueue(element)
    {
        this.d.insert_last(element);
    }
     
    // dequeue to remove element from first
    // using remove at first function of deque
    dequeue()
    {
        this.d.remove_first();
    }
     
    // display
    display()
    {
        this.d.display();
    }
     
    // size
    size()
    {
        return this.d.size();
    }
}
 
// Object of Stack
let stk = new Stack();
 
// push 7 and 8 at top of stack 
stk.push(7);
stk.push(8);
console.log("Stack: ");
stk.display();
  
// pop an element
stk.pop();
console.log("Stack: ");
stk.display();

 
// Object of Queue
let que = new Queue();
 
// Insert 12 and 13 in queue
que.enqueue(12);
que.enqueue(13);
console.log("Queue: ");
que.display();
 
 
// Delete an element from queue
que.dequeue();
console.log("Queue: ");
que.display();
 
// New line
console.log("Size of stack is " + stk.size());
console.log("Size of queue is " + que.size())