class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }
    push(val){
        if(this.top == null){
            this.top = new Node(val);
            return this;
        }
        var top = this.top;
        this.top = new Node(val);
        this.top.next = top;
        return this;
    }

    pop(){
        if(this.top == null){
            return this;
        }
        let removedNode = this.top;
        this.top = this.top.next;
        return removedNode;
    }
}

let stack = new Stack();
stack.push(1).push(2).push(3);
console.log(stack);
stack.pop();
console.log(stack);