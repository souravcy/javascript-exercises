function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
}

const palindromes = function (a) {
    let i=0;
    let j=a.length-1;
    while(i>=j){
        let l=a[i].toLowerCase();
        let r=a[j].toLowerCase();
        if(l!==r){
            if(!charIsLetter(l)){
                i++;
            }
            else if(!charIsLetter(r)){
                j--;
            }
            else
                return false;
        }
        else{
            i++;
            j--;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
