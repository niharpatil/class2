var assert = require('assert');
var chai = require('chai')
var expect = chai.expect;
const {
  convertTemperature,
  areaOfTriangle,
  stringsAreEqual,
  putTwoStringsTogether,
  replaceHamWithBrocolli,
  umaIsAwesome,
  addAllNumbersInArray,
  returnHi,
  addsTwoNumbers,
  calculate,
  isPalindrome,
} = require('./exercises');

describe('convertTemperature', function(){
  it('should convert 40 degrees Fahrenheight to 4.4 degrees Celsius',function(){
    assert.equal(convertTemperature(40, 'Fahrenheight'), 4.4)
  })
  it('should convert 4.4 degrees Celsius to 40 degrees Fahrenheight',function(){
    var val = convertTemperature(4.4, 'Celsius')
    assert.equal(Math.ceil(val), 40)
  })
})
describe('areaOfTriangle', function(){
  it('should return an area of 12 for a triangle with a base of 6 and a height of 4', function(){
    assert.equal(areaOfTriangle(6,4),12)
  })
  it('should return an area of 24 for a triangle with a base of 6 and a height of 8', function(){
    assert.equal(areaOfTriangle(6,8),24)
  })
})
describe('stringsAreEqual', function(){
  it('should return true if both strings are equal', function(){
    assert.equal(stringsAreEqual("h","h"), true)
  })
  it('should return false if both strings are not equal', function(){
    assert.equal(stringsAreEqual("h","g"), false)
  })
})
describe('putTwoStringsTogether', function(){
  it('should return "hello world" if when str1 is "hello" and str2 is "world"', function(){
    assert.equal(putTwoStringsTogether("hello","world"), "hello world")
  })
  it('should return "hi uma" if when str1 is "hi" and str2 is "uma"', function(){
    assert.equal(putTwoStringsTogether("hi","uma"), "hi uma")
  })
})
describe('replaceHamWithBrocolli', function(){
  it('should replace all instances of "HAM" with the string "BROCOLLI"', function(){
    var greenEggsAndHam = require('./greenEggsAndHam')
    var answer = replaceHamWithBrocolli(greenEggsAndHam)
    expect(answer).to.not.include("HAM")
  })
})
describe('umaIsAwesome', function(){
  var answer = umaIsAwesome()
  it('should return an array that contains "uma is awesome" at least once', function(){
    expect(answer).to.include('uma is awesome')
  })
  it('should return an array that is length 100', function(){
    expect(answer).to.have.lengthOf(100)
  })
})
describe('addAllNumbersInArray', function(){
  it('should add all numbers in array', function(){
    var arr = [1,2,3]
    var answer = addAllNumbersInArray(arr)
    expect(answer).to.equal(6)
  })
})
describe('returnHi', function(){
  it('should return "hi"', function(){
    var answer = returnHi()
    expect(answer).to.equal('hi')
  })
})
describe('addsTwoNumbers', function(){
  it('should return 6 given num1=3 and num2=3', function(){
    var answer = addsTwoNumbers(3,3)
    expect(answer).to.equal(6)
  })
  it('should return 19 given num1=10 and num2=9', function(){
    var answer = addsTwoNumbers(10,9)
    expect(answer).to.equal(19)
  })
})
describe('calculate', function(){
  it('should correctly perform addition', function(){
    var answer = calculate(3,"+",9)
    expect(answer).to.equal(3 + 9)
  })
  it('should correctly perform subtraction', function(){
    var answer = calculate(9,"-",3)
    expect(answer).to.equal(9-3)
  })
  it('should correctly perform multiplication', function(){
    var answer = calculate(3,"*",9)
    expect(answer).to.equal(3*9)
  })
  it('should correctly perform division', function(){
    var answer = calculate(9,"/",3)
    expect(answer).to.equal(9/3)
  })
})
describe('isPalindrome', function(){
  it('should return true if given a valid palindrome', function(){
    var answer = isPalindrome('racecar')
    expect(answer).to.be.true
  })
  it('should return false if given an invalid palindrome', function(){
    var answer = isPalindrome('asdfa')
    expect(answer).to.be.false
  })
})
