class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SList{

    constructor(){
        this.head=null;
    }

    insert(value){
        if(this.head == null){
            this.head = new Node(value);
            return this;
        }
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next=new Node(value);
        return this;
    }

    
}

var list = new SList();

list.insert(7).insert(8).insert(9);
console.log(list);
