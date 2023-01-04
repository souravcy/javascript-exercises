const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let pro=1;
  for(let i=0;i<arr.length;i++){
    pro=pro*arr[i];
  }
	return pro;
};

const power = function(a,b) {
  let pro=1;
  for(let i=0;i<b;i++){
    pro=pro*a;
  }
	return pro;
};

const factorial = function(a) {
	let fac=1;
  for(let i=a;i>1;i--){
    fac=fac*i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
