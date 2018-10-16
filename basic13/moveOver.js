function insert(y, arr){
    for(var i= arr.length-1; i>=0; i--){
        arr[i+1]=arr[i];
    }
    arr[0]=y
    return arr;
}

var x = [2,3,4,5]

console.log(insert(1, x));