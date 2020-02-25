module.exports = function countCats(arr) {
  if (arr.length == 0){
    return 0;
  }
  
  let flattened = arr.reduce(function (a, b) {
    return a.concat(b);
  });
  
  let quantity = 0;
  if (quantity.length == 0) {
    return 0;
  }

  for (element of flattened) {
    if (element == "^^") {
      quantity++;
    }
  }
  return quantity;
};
