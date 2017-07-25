function hadamard(n) {
  if((n > 4 && n % 4 !== 0) || (n === 3)) return 'Introduce a valid order.'
  memo = {};
  memo[1] = [1];
  memo[2] = [[1, 1],[1, -1]]
  return h(n);
}

function secondQuarter(positive, result, antOrder, order) {
  for(var i = 0, a = 0; a < antOrder ; i += 1, a += 1){
    for(var j = 0, b = antOrder; b < order; j += 1, b += 1) {
      result[a].push(positive[i][j]);
    }
  }
  return result;
}

function thirdQuarter(positive, result, antOrder, order) {
  for(var i = 0, a = antOrder; a < order; i += 1, a += 1){
    result.push([]);
    for(var j = 0, b = 0; b < antOrder; j += 1, b += 1) {
      result[a].push(positive[i][j]);
    }
  }
  return result;
}

function fourthQuarter(positive, result, antOrder, order) {
  for(var i = 0, a = antOrder; a < order; i += 1, a += 1){
    for(var j = 0, b = antOrder; b < order; j += 1, b += 1) {
      result[a].push(-1*positive[i][j]);
    }
  }
  return result;
}

function h(order) {
  if(memo[order]) {
    return memo[order];
  } else {
    var positive = order > 4 ? h(order - 4) : h(2);
    var antOrder = order > 4 ? order - 4 : 2;

    var result = positive
    result = secondQuarter(positive, result, antOrder, order);
    result = thirdQuarter(positive, result, antOrder, order);
    result = fourthQuarter(positive, result, antOrder, order);

    memo[order] = result;
    return result;
  }
}

var x = hadamard(2);


console.log(x);
module.exports = {};