const ftoc = function(temp) {
  let cel=(temp-32)*5/9;
  cel=Math.round(cel * 10) / 10
  return cel;
};

const ctof = function(temp) {
  let cel=(temp*9/5)+32;
  cel=Math.round(cel * 10) / 10
  return cel;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
