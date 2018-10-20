//need to implement a way to check every possible position of operators + and - 
// for example : (1+2+3+4) (1-2+3+4) (1-2+3-4) and so on

function arithmeticBoggle(num, arr) {
    var sum = 0;
    for(var i=0; i < arr.length; i++){
        sum += arr[i];
        console.log("sum is: ", sum)
    }
      for(var k=0; k < arr.length; k++){
        console.log("console check: " + sum + " - " + num + " = " + (sum - arr[k]) );
        if( (sum - arr[k]) == num){
            return true;
        }
      }
    
    return false;
}
console.log(arithmeticBoggle(2,[1,2,3,4]));