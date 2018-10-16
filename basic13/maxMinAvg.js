function maxMinAvg(arr){
    var sum =0;
    var avg
    var max=arr[0];
    var min=arr[0];
    for(var i = 0; i< arr.length; i++){
        sum = sum + arr[i];
        if(arr[i]> max){
            max = arr[i];
        } else if (arr [i] < min){
            min = arr[i];
        }
    }
    avg=sum/arr.length;
    console.log("Max: ", max , " | Min: ", min, " | Avg", avg);
}

x=[1,5,10,-2];
maxMinAvg(x);