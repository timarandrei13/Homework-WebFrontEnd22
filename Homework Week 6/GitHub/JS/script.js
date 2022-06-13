// Question 1
// 1. global
// 2. out of scope
// 3. console prints:5

// Question 2
// 1. global
// 2. local
// 3. console prints:5

// Question 3
// 1. local
// 2. out of scope
// 3. no
// 4. console prints:snap pea
// 5. error vegetable not defined

// Question 4
// 1. local
// 2. global
// 3. console prints:Superman
// 4. console prints:Batman
// 5. no

// Question 5
// 1. global
// 2. console prints:beep
// 3. funtion declaration
// 4. error makeNoise is not a function
// 5. console prints:beep
// 6. console prints:beep 2 times
// 7. console prints:beep 2 times

// Question 6

var sumOfNums = function (numsArray) {
    if (numsArray.lenght === 0) {
        return 0;
    } else {
        return numsArray.reduce((prev, curr) => prev + curr, 0);
    }
}

// Question 7 

var numsGreaterThanTen = function (numsArray) {
    return numsArray.filter((item) => item > 10);
}

// Question 8

var allStartingWithA = function (words) {
    if (words.length === 0) {
        return true;
    } else {
        let wordsWithA = words.filter((item) => item.startsWith("a") || item.startsWith("A"));
          if (words.length === wordsWithA.length) {
            return true;
          } else return false;
    }
}

// Question 9

var hasAtLeastNVowels = function (word, n) {
    let regex = /[a,e,i,o,u]/g;
      if (n < 0) {
        return null;
      } else {
          if (word.toLowerCase().match(regex).length >= n) {
            return true;
          } else return false;
      }
}

// Question 10

var buildObjectFromWords = function (words) {
    let obj = {};
    words.forEach((item) => (obj[item] = item.length));
    return obj;
}
