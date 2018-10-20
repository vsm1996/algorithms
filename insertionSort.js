function insertionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var temp = arr[i];
        for(var k = i - 1; k >= 0 && arr[k] > temp; k--){
            arr[k+1] = arr[k]
        }
        arr[k+1] = temp;
    }
    return arr;
}

console.log(insertionSort([5,4,2,9,0]))