const { expect } = require('chai');
const Score = require('../lib/Score.js');
const Frog = require('../lib/Frog.js');

describe('Score', function() {
  it('should be an object', function () {
  const score = new Score();
  expect(score).to.be.an('object'); 
  })

  it('should start with a count of 3 lives', function() {
    const score = new Score();
    expect(score.lives).to.equal(3);
  })

  it('should lose a life if frog dies', function() {
    const score = new Score();
    const frog = new Frog();
    frog.frogDies(score);
    expect(score.lives).to.equal(2);
  })

  it('score should increment the score when frog moves forward', function() {
    const score = new Score();
    const frog = new Frog();
    frog.hopUp(score);
    expect(score.points).to.equal(10);
  })

  it('should start the game over if the player loses three lives', function() {
    const score = new Score();
    const frog = new Frog();
    frog.hopUp(score);
    frog.frogDies(score);
    frog.frogDies(score);
    frog.frogDies(score);
    score.gameOver(frog);
    expect(score.lives).to.equal(3);
    expect(score.points).to.equal(0);
  })

})
