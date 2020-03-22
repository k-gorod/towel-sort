
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var ret= [];
  
  if(matrix){
    for (let i = 0; i < matrix.length; i++) {
      if(i%2!=0){matrix[i].reverse()}
      ret = ret.concat(matrix[i]);
    }
  }

  return ret;
}
