function negtoString(arr){
    for (var i=0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

var x = [-1,-3,2];
console.log(negtoString(x));