function removeNeg(arr){
    var count = 0;
    for (var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i]=arr[i+1];
            count++
        } else {
            arr[i-count] = arr[i];
        }
    }
    while(count--){
        arr.pop();
    }
    return arr;
}

x=[0,-1,2,-3,4,-5,6];

console.log(removeNeg(x));