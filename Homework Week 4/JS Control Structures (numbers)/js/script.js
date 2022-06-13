//oddNumbers
function getFirstOddNumbers(count) {
  var n;
  var result = [];

  for (n = 1; n < count * 2; n += 2) {
    result.push(n);
  }
  return result;
}

var odds = getFirstOddNumbers(10);
console.log(odds.join('\n'));

//sumElements
function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++)
    sum += arr[i];

  return sum;
}

let arr = [1, 2, 3, 4, 5];
document.write("Sum of given array is " + sum(arr));

//maximumElement
var myArray = [1, 5, 4, 2, 3];
var m = Math.max(...myArray);
console.log(m)

//countElements
function countInArray(array, value) {
  return array.reduce((n, x) => n + (x === value), 0);
}
console.log(countInArray([1, 2, 3, 4, 4, 4, 4, 4, 4, 3], 3));
