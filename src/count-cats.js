const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  throw new CustomError('Not implemented');
  let x = 0;
  for(let i = 0; i < backyard.length; i++) {
    for(let j = 0; j < backyard.length; j++) {}
      if (backyard[i][j] === '^^') {
        x++;
      }
  }
  return x;
};
