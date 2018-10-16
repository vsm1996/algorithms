function oddArray(){
   
    var arr = [];
    for (var i = 1; i < 256; i++){
        if(i % 2 ==1){
            arr.push(i);
        }
    }
    return arr;
}
console.log(oddArray());