function printSum(){
    var i = 1;
    var sum = 0;
    while (i <= 5000){
        sum = sum + i;
        i++;
    }
    return sum;
}

console.log(printSum());