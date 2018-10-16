class Node{
    next;
    prev;
    val;
    constructor(val){
        this.next = null;
        this.prev = null;
        this.val = val;
        this.create(val);
    }
    create(val){
        if (list.head == null){
            newNode = new Node(val);
            list.head = newNode;
            list.tail = newNode
        } else {
            newNode = new Node(val);
            list.tail.next = newNode;
            newNode.prev = list.tail;
            list.tail = newNode;
        }
        return this;
    }
}

class DList{
    head;
    tail;
    constructor(){
        this.head=null;
        this.tail=null;
    }
    reverse(){
        var runner = this.head;
        var head = this.head;
        var tail = this.tail;
        this.head = tail;
        this.tail = head;
        while(runner!=null){
            var prev = runner.prev;
            var next = runner.next;
            runner.next = prev;
            runner.prev = next;
            runner = runner.prev
        }
        return this;
    }

    isPalindrome(){
        var check = false;
        var headrun = this.head;
        var tailrun = this.tail;
        while(headrun.next != tailrun.prev){
            if(headrun.val == tailrun.val){
                headrun = headrun.next;
                tailrun = tailrun.prev;
                check = true;
            } 
        }
        if (check == 'true'){
            return true;
        }
        return false;
    }
}

list = new DList();

