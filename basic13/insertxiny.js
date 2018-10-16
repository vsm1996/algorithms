function xiny(arr,x,y){
    for(var i=arr.length; i > y; i--){
        console.log(arr);
        arr[i] = arr[i-1];
    }
    arr[y] = x;
    return arr;
}
arr=[1,3,5,7];
x=10;
y=2;
console.log(xiny(arr,x,y));