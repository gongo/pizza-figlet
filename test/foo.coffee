# This test is practice of gulp-mocha and power-assert.

assert = require('power-assert')

describe 'Array', ->
  beforeEach ->
    @ary = [1, 2, 3]

  describe '#indexOf()', ->
    it 'should return index when the value is present', ->
      zero = 1
      two  = 1

      assert @ary.indexOf(zero) == two;
