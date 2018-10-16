function findMax(arr){
    var max = arr[0];
    for (var i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

var x = [-3,3,5,7]
console.log(findMax(x));