const expect = require('chai').expect;

const hadamard = require('./hadamard.js');

describe('hadamard function', ()=> {
  it('should be a function', () => {
    expect(hadamard).to.be.a('function');
  });

  it('should hadamard(1) be [1]', () => {
    expect(hadamard(1)).to.deep.equal([1]);
  });

  it('should hadamard(2) be [[1, 1], [1, -1]]', () => {
    expect(hadamard(2)).deep.equal([[1, 1], [1, -1]]);
  });

  it('should hadamard(1) be part of hadamard(2)', () => {
    const h1 = hadamard(1);
    const h2 = hadamard(2);
    let result = true;
    if(h2[0][0] !== h1[0]) result = false;
    if(h2[0][1] !== h1[0]) result = false; 
    if(h2[1][0] !== h1[0])  result = false;
    if(h2[1][1] !== (-1) * h1[0]) result = false;
    expect(result).to.be.true;
  });
});