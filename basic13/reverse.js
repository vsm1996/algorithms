function reverse (arr){
    for(var i = 0; i< arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

x =[3,4,5,6,7,8,9]
console.log(reverse(x));