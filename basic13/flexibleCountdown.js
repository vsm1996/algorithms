function flexiCount(lowNum, highNum, multi){
    for(var i= highNum;i > lowNum; i--){
        if(i%multi===0){
            console.log(i);
        }
    }
}

flexiCount(2,9,3);