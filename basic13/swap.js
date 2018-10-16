function swap(arr){
    var temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
}
var x = [2,3,5,7,6];

console.log(swap(x));