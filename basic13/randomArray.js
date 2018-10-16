function randArr(){
    var arr = []
    for(var i=0; i<10; i++){
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

console.log(randArr());