class Node {
    constructor(val){
        this.val = val
        this.left=null;
        this.right=null;
    }
}

class BST {
    constructor(){
        this.root=null;
    }
    insert(val){
        if(!this.root){
            this.root = new Node(val);
            return this;
        }
        var runner = this.root;
        while(runner){
            if(runner.val < val) {
                if(runner.right){
                    runner = runner.right;
                } else {
                    runner.right = new Node(val);
                    return this;
                }
            } else if(runner.val > val ){
                if(runner.left){
                    runner = runner.left;
                } else {
                    runner.left = new Node(val);
                    return this;
                }
            }
        }
    }
}

var bst = new BST();
bst.insert(3).insert(4).insert(5).insert(20).insert(300).insert(0).insert(1).insert(2);

console.log(bst.root)