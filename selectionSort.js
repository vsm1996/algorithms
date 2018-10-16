function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var x = i+1; x < arr.length; x++) {
            if (arr[min] > arr[x]) {
                min = x;
            }
        }
        if (i != min) {
            var temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([2, 8, 3, 6, 5, 7]));