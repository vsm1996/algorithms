function findAvg(arr){
    var sum = 0;
    var avg;
    for(var i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    avg = sum/arr.length;
    return avg;
}

x = [1,3,5,7,20];

console.log(findAvg(x));