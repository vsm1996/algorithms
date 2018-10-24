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

    addToFront(value){
        if(this.head == null){
            this.head = new Node(value);
            return this;
        }
        let hold = this.head
        this.head = new Node(value);
        this.head.next = hold;
        return this;
    }

    findVal(value){
        if(this.head ==null){
            return null;
        }
        let runner = this.head;
        while (runner != null){
            if(runner.val == value){
                return runner;
            }
            runner = runner.next;
        }
        return null;
    }

    removeFront(){
        if(this.head == null){
            return null;
        }
        let head = this.head;
        this.head = this.head.next;
        return this.head; //returns new head node
    }

    checkFront(){
        if(this.head == null){
            return null;
        }
        return this.head.val;
    }

    count(){
        let count = 0;;
        if (this.head == null){
            return count;
        } else if (this.head.next == null){
            count++;
            return count;
        }
        let runner = this.head;
        while (runner!=null){
            count++;
            runner = runner.next;
        }
        return count;
    }

    findMax(){
        let max = 0;
        if(this.head == null){
            return max;
        }
        let runner = this.head;
        while(runner!=null){
            if(runner.val > max){
                max = runner.val
            }
            runner = runner.next;
        }
        return max;
    }

    findMin(){
        let runner = this.head;
        let min = runner.val
        if(runner == null){
            return null;
        }
        while(runner!=null){
            if(runner.val < min){
                min = runner.val;
            }
            runner = runner.next;
        }
        return min;
    }
    
    //doesn't work
    createString(){
        let str = " ";
        let runner = this.head;
        while(runner!=null){
            str.concat(runner.val);
            console.log(str);
            runner = runner.next;
        }
        return str;
    }

    findAvg(){
        let sum = 0;
        let runner = this.head;
        if(runner==null){
            return null;
        }
        while(runner!=null){
            sum += runner.val;
            runner = runner.next;
        }
        let length = this.count();
        let avg = sum/length;
        return avg;
    }


}

var list = new SList();

list.insert(7).insert(8).insert(9);
console.log("After insert: ", list);

list.addToFront(6)
console.log("After add to front: ", list);

console.log("Find val: ", list.findVal(9));

console.log("Remove front: ", list.removeFront());

console.log("Front: ", list.checkFront());

console.log("Count: ", list.count());

console.log("Max val: ", list.findMax());

console.log("Min val: ", list.findMin());

console.log("Average: ", list.findAvg());

console.log("Create string: ", list.createString());
