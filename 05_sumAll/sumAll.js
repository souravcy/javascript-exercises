const sumAll = function(start,end) {
    if((start<0 || typeof(start)!="number") || (end<0 || typeof(end)!="number"))
        return ("ERROR");
    if(start>end){
        let c=start;
        start=end;
        end=c;
    }
    let sum=0;
    for(let i=start;i<=end;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
