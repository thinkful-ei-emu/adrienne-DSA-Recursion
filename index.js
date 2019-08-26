// Counting Sheep
const sheep = function (num) {
  if(num === 0) {
    return 'All sheep jumped over the fence';
  }
  const message = 'Another sheep jumped over the fence';
  sheep(num - 1);
  return `${num}: ${message}`;
};

sheep(6);


// Power Calculator
const powerCalculator = function(base, exponent) {
  if(exponent < 0) {
    return;
  }
  if(exponent === 0) {
    return 1;
  }
  return base * (powerCalculator(base, exponent-1));
};

powerCalculator(10, 2);


// Reverse String
const reverseString = function(string) {
  if(string === '') {
    return '';
  }
  return reverseString(string.substr(1)) + string.charAt(0);
};
reverseString('Hello');


// triangular number
const triangularNumber = function(num) {
  // input: 2, 3
  // output: 3, 6
  // taking existing number of dots and adding the next value it (moving from 3 to 4 adds 4 dots, moving from 4 to 5 adds 5 dots)
  // smallest possible option is 1
  if(num === 1) {
    return 1;
  }
  return num + triangularNumber(num-1);
};
triangularNumber(7);


// String Splitter
function stringSplitter(separator, string) {
  // input: 02/20/2020
  // output: 02202020
  // base case empty string
  // remove characters that are the separator parameter
  // return new string of all the characters without the separator
  if(string === '') {
    return '';
  }
  else if(string.charAt(0) === '/'){
    return stringSplitter(separator, string.substr(1));
  }
  else {
    return string.charAt(0)+ stringSplitter(separator, string.substr(1));
  }
}
stringSplitter('/', '02/20/2020');

// Fibonacci
function fibonacci(num) {
  // base case 1
  // sum of 2 numbers before it
  // print out sequence
  // input: 7
  // output: 1, 1, 2, 3, 5, 8, 13
  if(num === 0) {
    return 0;
  }
  if(num === 1) {
    return 1;
  }
  return fibonacci(num-1) + fibonacci(num-2);
}
fibonacci(7);


// Factorial
function factorial(num) {
  // base case of 1
  // sum of all numbers under it multiplied
  // input: 5
  // output: 120
  if(num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
factorial(5);


// Maze
// want to test each string in 
// base case would be 'e'
// input: maze array
// output: solution to exit
function maze(array) {
  if(array.length === 0) {
    return '';
  }
  return maze(array[array.length-1].map(entry => entry === ' ' ? 'R' : 'D'));
}


// Second Maze


// Anagrams
// input: east
// output: east, eats, esta, esta, etas, etsa, 


// Last Question
// input: 5     3
// output: 101  11(binary representation)

// take 5 mod (%) by 2 and each time will get a 1 or 0
// 5%2 = 1
// decrement won't help could divide by 2
// 5/2 = 2 if don't consider decimal
// 2(from divide)%2 = 0 2/2 = 1
// 1%2 = 1 1/2 = 0

// 3%2 = 1 3/2 = 0

// stop at 0
// binary representation is a string not a number

function binaryRep(num) {
  if(num < 0) {
    return ' ';
  }
  let binary = num%2;
  return binaryRep(Math.floor(num/2)) + binary;
}

binaryRep(5);