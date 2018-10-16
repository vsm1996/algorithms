function diagonalDifference(arr) {
    var diag1 = 0;
    var diag2 = 0;
    for (var i=0; i < arr.length; i++){
        for (var k=0; k < arr.length ; k++){
            if(i == k){
                diag1 += arr[i][k];
            }
            if( i == arr.length - k - 1){
                diag2 += arr[i][k];
            }
        }
    }
    
    return Math.abs(diag1-diag2);
}
var x=[[11,2,4],[4,5,6],[10,8,-12]];
console.log(diagonalDifference(x));