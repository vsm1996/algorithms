function plusMinus(arr){
    var pos=0;
    var neg=0;
    var zer=0;
    for(var i=0; i < arr.length; i++){
        if(arr[i]<0){
            neg++
        }
        if(arr[i] > 0){
            pos++
        }
        if(arr[i] ==0){
            zer++
        }
    }
    console.log("Decimal amount of Positive: " + pos/arr.length);
    console.log("Decimal amount of Negative: " + neg/arr.length);
    console.log("Decimal amount of Zeros: " + zer/arr.length);
}

var x = [-2,4,5,6-9,0,-12]
plusMinus(x);