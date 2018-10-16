function shift(arr){
    var temp=arr[0];
    for (var i= 0; i<arr.length; i++){
        arr[i]=arr[i+1];

    }
    arr[arr.length-1]=0;
    return arr;
}

x=[1,5,10,7,-2];
console.log(shift(x));