class Minstack {
    constructor() {
        this.stack = []
        this.min = []
    }
    
    push(x){
        if(this.stack.length === 0){
            this.min.push(x)
        }else{
            let minimum = Math.min(x, this.min[this.min.length - 1])
            this.min.push(minimum)
        }
        this.stack.push(x)
    }

    pop(){
        this.stack.pop();
        this.min.pop();
    }

    top(){
        return this.stack[this.stack.length - 1]
    }

    getmin(){
        return this.min[this.min.length - 1]
    }
    isEmpty(){
        if(this.stack.length == 0){

            return "Stack is empty"
        }else{
            return this.stack
        }
    }
}

let newStack = new Minstack()
newStack.push(12)
newStack.push(21)
newStack.push(13)
newStack.push(41)
newStack.push(5)
newStack.push(6)
newStack.push(7)
newStack.pop()



//console.log(newStack);
console.log(newStack.getmin());
// console.log(newStack.isEmpty());