// normal syntax
const square = function(x) {
  return x * x
}
console.log(square(2));

// shorthand syntax - no curly braces, no return
const squareArrow = (x) => x * x
console.log(squareArrow(x))

// arguments objects - no longer bound with arrow functions
const add = (a,b) => {
  // console.log(arguments);
  return a + b;
}
console.log(55, 1, 1001);
// console.log(arguments) -> error -> arguments undefined
// arguments no longer exist in arrow functions

// this keyword - no longer bound
const user = {
  name: 'Christian',
  cities: ['Buenos Aires', 'Ljubljana', 'Berlin'],
  // printPlacesLived: function() {
  // es5 function -> keep this functionality
  // will do rewrite with new es6 method syntax
  printPlacesLived() {
    return this.cities.map((city) => this.name + 'has lived in ' + city);
  }
}
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1,4,6,7],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}
console.log(multiplier.multiply());

