class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    add(val){
        if(this.tail == null){
            this.tail = new Node(val);
            this.head=this.tail;
            return this;
        }
        newNode = new Node(val);
        this.tail.next= newNode;
        this.tail = newNode;
        return this;
    }

    remove(){
        if(this.head == null){
            return null 
        } else if(this.head == this.tail){
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            return removedNode;
        }
        removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }


}