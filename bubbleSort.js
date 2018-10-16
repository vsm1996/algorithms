function bubbleSort(arr){
    for (var i=0; i < arr.length; i++){
        for (var k=0; k < arr.length-1-i;k++){
            if (arr[k] > arr[k+1]){
                var temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1]=temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3,4,5,1,2,7,8,6,9]));