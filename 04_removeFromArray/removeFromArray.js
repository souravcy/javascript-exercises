const removeFromArray = function() {
    let arr=arguments[0];
    let brr=Array.from(arguments);
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<brr.length;j++){
            if(brr[j]==arr[i] && typeof(arr[i])==typeof(brr[j])){
                arr.splice(i,1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
