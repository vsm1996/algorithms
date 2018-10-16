function birthdayCakeCandles(ar) {
    var count=0;
    var max=ar[0];
    for(var i =0; i < ar.length ; i++){
        if(max < ar[i]){
          max = ar[i]
        }
    }
  for(var x=0; x < ar.length; x++){
    if(max == ar[x]){
      count++
    }
  }
    return count;
}
var x = [18,90,90,13,90, 75, 90, 8, 90, 43]
console.log(birthdayCakeCandles(x))

