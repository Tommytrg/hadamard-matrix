function hadamard(n) {
  if((n > 4 && n % 4 !== 0) || (n === 3)) return 'Introduce a valid order.'
  memo = {};
  memo[1] = [1];
  memo[2] = [[1, 1],[1, -1]]
  return h(n);
}

function h(order) {
  if(memo[order]) {
    return memo[order];
  } else {
    var q1 = order > 4 ? h(order - 4) : h(2);
    var antOrder = order > 4 ? order - 4 : 2;

    var hadamardMatrix = q1
    hadamardMatrix = addQ2(q1, hadamardMatrix, antOrder, order);
    hadamardMatrix = addQ2(q1, hadamardMatrix, antOrder, order);
    hadamardMatrix = addQ4(q1, hadamardMatrix, antOrder, order);

    memo[order] = hadamardMatrix;
    return hadamardMatrix;
  }
}

function addQ2(q1, hadamardMatrix, antOrder, order) {
  for(var i = 0, a = 0; a < antOrder ; i += 1, a += 1){
    for(var j = 0, b = antOrder; b < order; j += 1, b += 1) {
      hadamardMatrix[a].push(q1[i][j]);
    }
  }
  return hadamardMatrix;
}

function addQ2(q1, hadamardMatrix, antOrder, order) {
  for(var i = 0, a = antOrder; a < order; i += 1, a += 1){
    hadamardMatrix.push([]);
    for(var j = 0, b = 0; b < antOrder; j += 1, b += 1) {
      hadamardMatrix[a].push(q1[i][j]);
    }
  }
  return hadamardMatrix;
}

function addQ4(q1, hadamardMatrix, antOrder, order) {
  for(var i = 0, a = antOrder; a < order; i += 1, a += 1){
    for(var j = 0, b = antOrder; b < order; j += 1, b += 1) {
      hadamardMatrix[a].push(-1*q1[i][j]);
    }
  }
  return hadamardMatrix;
}

module.exports = hadamard;